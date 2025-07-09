import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma"; // adjust if your path differs

export async function GET() {
  try {
    const summaries = await prisma.moduleSummary.findMany({
      orderBy: { order: "asc" },
    });

    return NextResponse.json(summaries, { status: 200 });
  } catch (error) {
    console.error("[GET /api/module-summary]", error);
    return NextResponse.json(
      { error: "Failed to fetch module summaries" },
      { status: 500 }
    );
  }
}
