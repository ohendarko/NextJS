// app/api/signup/route.ts
import { NextResponse } from 'next/server';
import { PrismaClient } from '../../../lib/generated/prisma';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, password, country } = body;

    if (!fullName || !email || !password || !country) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return NextResponse.json({ error: 'Email already registered' }, { status: 409 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name: fullName,
        email: email,
        password: hashedPassword,
        countryOfDegree: country,
      },
    });

    return NextResponse.json({ message: 'User created', userId: user.id });
  } catch (error) {
    console.error('Signup error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
