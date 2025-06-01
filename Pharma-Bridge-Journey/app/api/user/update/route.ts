// app/api/user/update/route.ts
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import {PrismaClient} from "@/lib/generated/prisma";


const prisma = new PrismaClient();

export async function POST(req: Request) {
  const body = await req.json();

  try {
    // Optional: validate session here
    // const session = await getServerSession(authOptions);
    // if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const updatedUser = await prisma.user.update({
      where: { email: body.email },
      data: {
        name: body.name,
        countryOfDegree: body.countryOfDegree,
        degreeType: body.degreeType,
        phoneNumber: body.phoneNumber,
        graduationYear: body.graduationYear,
        profileImage: body.profileImage,
      },
    });

    return NextResponse.json(updatedUser);
  } catch (error) {
    console.error("API Update Error:", error);
    return NextResponse.json({ error: "Failed to update profile" }, { status: 500 });
  }
}
