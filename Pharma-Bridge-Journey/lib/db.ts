import { PrismaClient } from "@/lib/generated/prisma"; // adjust to your Prisma instance

const prisma = new PrismaClient();

export async function getUserProfile(userId: string) {
  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    return user;
  } catch (error) {
    console.error("Error fetching user profile:", error);
    return null;
  }
}
