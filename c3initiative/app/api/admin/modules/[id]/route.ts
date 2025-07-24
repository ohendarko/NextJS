import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma"; // adjust path as needed
import { authOptions } from "@/lib/auth/options";
import { getServerSession } from "next-auth";

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions);

  // if (!session || !session.user || session.user.role !== "admin") {
  //   return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  // }

  const moduleId = params.id;
  const body = await req.json();

  try {
    const updatedModule = await prisma.module.update({
      where: { id: moduleId },
      data: {
        ...body,
        updatedAt: new Date(),
      },
    });

    return NextResponse.json({ updatedModule, status: "success" });
  } catch (error) {
    console.error("Update module error:", error);
    return NextResponse.json({ error: "Failed to update module" }, { status: 500 });
  }
}
