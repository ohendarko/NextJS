import { NextResponse } from "next/server";
import { PrismaClient } from "@/lib/generated/prisma";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const { email } = await req.json();

  try {
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "User exists" });
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
