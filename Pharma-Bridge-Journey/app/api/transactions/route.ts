import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth/options";
import { PrismaClient } from "@/lib/generated/prisma"; 

const prisma = new PrismaClient();

export async function GET() {
  const session = await getServerSession(authOptions);
  const email = session?.user?.email;

  if (!email) {
    return NextResponse.json({ error: "Missing email" }, { status: 400 });
  }

  try {
    const transactions = await prisma.transaction.findMany({
      where: { userEmail: email },
      orderBy: { date: "desc" }
    });

    return NextResponse.json(transactions);
  } catch (error) {
    console.error("[TRANSACTION_GET_ERROR]", error);
    return NextResponse.json({ error: "Failed to load transactions" }, { status: 500 });
  }
}

// POST new transaction
export async function POST(req: Request) {
  
  const data = await req.json();

  const transaction = await prisma.transaction.create({
    data,
  });

  return NextResponse.json(transaction, { status: 201 });
}