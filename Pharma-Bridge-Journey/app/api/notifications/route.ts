import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth/options"
import { PrismaClient } from "@/lib/generated/prisma"

const prisma = new PrismaClient()

export async function GET() {
  const session = await getServerSession(authOptions)
  if (!session?.user?.email) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })

  const notifications = await prisma.notification.findMany({
    where: { user: { email: session.user.email } },
    orderBy: { createdAt: "desc" },
  })

  return NextResponse.json(notifications)
}

export async function POST(req: Request) {
  const session = await getServerSession(authOptions)
  if (!session?.user?.email) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })

  const body = await req.json()
  const { title, message, type, date, time, priority, action } = body

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  })

  if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 })

  const notification = await prisma.notification.create({
    data: {
      type,
      title,
      message,
      date,
      time,
      priority,
      action,
      userId: user.id,
    },
  })

  return NextResponse.json(notification)
}

export async function PUT({ params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions)
  if (!session?.user?.email) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })

  const { id } = params

  const notification = await prisma.notification.update({
    where: { id },
    data: { read: true },
  })

  return NextResponse.json(notification)
}

export async function DELETE({ params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions)
  if (!session?.user?.email) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })

  const { id } = params

  await prisma.notification.delete({
    where: { id },
  })

  return NextResponse.json({ message: "Notification deleted" })
}