// /app/api/admin/clients/route.ts
import { NextResponse } from "next/server";
import { PrismaClient } from "@/lib/generated/prisma";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const totalClients = await prisma.user.count(); // Adjust model name if not 'user'

    return NextResponse.json({ totalClients });
  } catch (error) {
    console.error("Error fetching total clients:", error);
    return NextResponse.json({ error: "Failed to fetch total clients" }, { status: 500 });
  }
}
