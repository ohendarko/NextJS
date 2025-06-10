import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth/options';
import { PrismaClient } from "@/lib/generated/prisma"; // Adjust path if needed

const prisma = new PrismaClient();
// GET appointments by email
export async function GET() {
  const session = await getServerSession(authOptions);

  const email = session?.user?.email;

  if (!email) {
    return NextResponse.json({ error: "Missing email" }, { status: 400 });
  }

  const appointments = await prisma.appointment.findMany({
    where: { userEmail: email },
    orderBy: { date: "asc" },
  });

  return NextResponse.json(appointments);
}

// POST new appointment
export async function POST(req: Request) {
  
  const data = await req.json();

  const appointment = await prisma.appointment.create({
    data,
  });

  return NextResponse.json(appointment, { status: 201 });
}
