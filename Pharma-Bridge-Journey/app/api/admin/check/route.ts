import { NextResponse } from "next/server";
import { PrismaClient } from "@/lib/generated/prisma";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const user = await prisma.user.findUnique({
      where: { email },
      select: { admin: true },
    });

    return NextResponse.json({ isAdmin: user?.admin ?? false });
  } catch (error) {
    console.error("Admin check error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
