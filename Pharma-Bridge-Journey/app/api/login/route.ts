import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import clientPromise from '@/lib/mongodb'; // Your MongoDB connection helper
import jwt from 'jsonwebtoken';



export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  if (!email || !password) {
    return NextResponse.json({ error: 'Missing credentials' }, { status: 400 });
  }

  try {
    const client = await clientPromise;
    const db = client.db();
    const user = await db.collection('users').findOne({ email });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 401 });
    }

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      return NextResponse.json({ error: 'Invalid password' }, { status: 401 });
    }

    // Create JWT
    const token = jwt.sign(
      {
        email: user.email,
        name: user.name,
        id: user._id,
        admin: user.admin || false,
      },
      process.env.JWT_SECRET!,
      { expiresIn: '1h' }
    );

    const response = NextResponse.json({
      message: 'Login successful',
      user: {
        email: user.email,
        name: user.name,
        admin: user.admin || false,
      },
    });

    // Set JWT in secure httpOnly cookie
    response.cookies.set('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60, // 1 hour
      sameSite: 'lax',
      path: '/',
    });

    return response;
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
    
  }
}

