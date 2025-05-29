import { PrismaClient } from "@/lib/generated/prisma"


const prisma = new PrismaClient()

export const authCallbacks = {
  async signIn({ user }) {
    if (!user.email) return false

    const existingUser = await prisma.user.findUnique({
      where: { email: user.email },
    })

    if (!existingUser) {
      await prisma.user.create({
        data: {
          email: user.email,
          name: user.name,
        },
      })
    }

    return true
  },

  async session({ session }) {
    if (session.user?.email) {
      const dbUser = await prisma.user.findUnique({
        where: { email: session.user.email },
      })
      if (dbUser) {
        session.user.id = dbUser.id
      }
    }
    return session
  },
}
