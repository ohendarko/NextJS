import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { PrismaClient } from '@/lib/generated/prisma';


const prisma = new PrismaClient();

// export async function POST(req: Request) {
//   const session = await getServerSession();
//   if (!session?.user?.email) {
//     return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
//   }

//   const body = await req.json();
//   const { name, type, size, url, category, status = 'uploaded', notes = '' } = body;

//   try {
//     const user = await prisma.user.findUnique({
//       where: { email: session.user.email },
//     });

//     if (!user) return NextResponse.json({ error: 'User not found' }, { status: 404 });

//     const doc = await prisma.document.create({
//       data: {
//         userId: user.id,
//         ownerName: user.name,
//         ownerEmail: user.email,
//         name,
//         type,
//         size,
//         url,
//         category,
//         status,
//         notes,
//       },
//     });

//     return NextResponse.json(doc);
//   } catch (err) {
//     console.error(err);
//     return NextResponse.json({ error: 'Failed to save document' }, { status: 500 });
//   }
// }


export async function POST(req: Request) {
  const session = await getServerSession();

  if (!session?.user?.email) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await req.json();
  const { name, type, size, url, category, status = 'uploaded', notes = '' } = body;

  try {
    // Find the user
    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // Check if there's an existing document with the same category for the user
    const existingDoc = await prisma.document.findFirst({
      where: {
        userId: user.id,
        category,
      },
    });

    // If exists, delete it
    if (existingDoc) {
      await prisma.document.delete({
        where: { id: existingDoc.id },
      });
    }

    // Create the new document
    const newDoc = await prisma.document.create({
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

    return NextResponse.json(newDoc);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Failed to save document' }, { status: 500 });
  }
}


export async function GET() {
  const session = await getServerSession();

  if (!session?.user?.email) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    const documents = await prisma.document.findMany({
      where: {
        ownerEmail: user.email,
        NOT: { category: 'profile' },
      },
      orderBy: { uploadDate: 'desc' },
    });

    return NextResponse.json(documents);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Failed to fetch documents' }, { status: 500 });
  }
}