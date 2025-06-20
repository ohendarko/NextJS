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
    const invoices = await prisma.invoice.findMany({
      where: { userEmail: email },
      orderBy: { date: "desc" }
    });

    return NextResponse.json(invoices);
  } catch (error) {
    console.error("[INVOICE_GET_ERROR]", error);
    return NextResponse.json({ error: "Failed to load invoices" }, { status: 500 });
  }
}

// POST new invoive
export async function POST(req: Request) {
  
  const data = await req.json();

  const invoice = await prisma.invoice.create({
    data,
  });

  return NextResponse.json(invoice, { status: 201 });
}
