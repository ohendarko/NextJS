import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth/options"
import { PrismaClient } from "@/lib/generated/prisma"

const prisma = new PrismaClient()

export async function PUT(
  _req: NextRequest,
  { params }: { params: { id: string } } // must be inline!
) {
  const session = await getServerSession(authOptions)
  if (!session?.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const notification = await prisma.notification.update({
    where: { id: params.id },
    data: { read: true },
  })

  return NextResponse.json(notification)
}

export async function DELETE(
  _req: NextRequest,
  { params }: { params: { id: string } } // must be inline!
) {
  const session = await getServerSession(authOptions)
  if (!session?.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  await prisma.notification.delete({
    where: { id: params.id },
  })

  return NextResponse.json({ message: "Notification deleted" })
}
