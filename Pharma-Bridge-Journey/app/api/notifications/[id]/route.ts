import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth/options"
import { PrismaClient } from "@/lib/generated/prisma"

const prisma = new PrismaClient()

export async function PUT(_req: NextRequest, context : { params: { id: string } }) {
  const session = await getServerSession(authOptions)
  if (!session?.user?.email) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })

  const { id } = context.params

  const notification = await prisma.notification.update({
    where: { id },
    data: { read: true },
  })

  return NextResponse.json(notification)
}

export async function DELETE(_req: NextRequest, context: { params: { id: string } }) {
  const session = await getServerSession(authOptions)
  if (!session?.user?.email) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })

  const { id } = context.params

  await prisma.notification.delete({
    where: { id },
  })

  return NextResponse.json({ message: "Notification deleted" })
}
