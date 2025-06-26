import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth/options"
import { PrismaClient } from "@/lib/generated/prisma"


const prisma = new PrismaClient()

export async function GET() {
  const session = await getServerSession(authOptions)
  if (!session?.user?.email) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })

  const orders = await prisma.order.findMany({
    where: { user: { email: session.user.email } },
    orderBy: { createdAt: "desc" },
  })

  return NextResponse.json(orders)
}

export async function POST(req: Request) {
  const session = await getServerSession(authOptions)
  if (!session?.user?.email) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })

  const body = await req.json()
  const { items, totalAmount, status = "pending", paymentRef } = body

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  })

  if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 })

  const order = await prisma.order.create({
    data: {
      items,
      totalAmount,
      status,
      paymentRef,
      userId: user.id,
    },
  })

  return NextResponse.json(order)
}
