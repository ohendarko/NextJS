import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { PrismaClient } from '@/lib/generated/prisma';


const prisma = new PrismaClient();

export async function POST(req: Request) {
  const session = await getServerSession();
  if (!session?.user?.email) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await req.json();
  const { name, type, size, url, category, status = 'uploaded', notes = '' } = body;

  try {
    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    });

    if (!user) return NextResponse.json({ error: 'User not found' }, { status: 404 });

    const doc = await prisma.document.create({
      data: {
        userId: user.id,
        ownerName: user.name,
        ownerEmail: user.email,
        name,
        type,
        size,
        url,
        category,
        status,
        notes,
      },
    });

    return NextResponse.json(doc);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Failed to save document' }, { status: 500 });
  }
}
