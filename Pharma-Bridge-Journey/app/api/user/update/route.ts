
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import {PrismaClient} from "@/lib/generated/prisma";
import bcrypt from "bcryptjs";
import { authOptions } from "@/lib/auth/options";


const prisma = new PrismaClient();

// export async function POST(req: Request) {
//   const body = await req.json();

//   try {
//     // Optional: validate session here
//     // const session = await getServerSession(authOptions);
//     // if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

//     // If password provided, hash it
//     let hashedPassword: string | undefined;
//     if (body.password) {
//       const salt = await bcrypt.genSalt(10);
//       hashedPassword = await bcrypt.hash(body.password, salt);
//     }

//     const updatedUser = await prisma.user.update({
//       where: { email: body.email },
//       data: {
//         name: body.name,
//         countryOfDegree: body.countryOfDegree,
//         degreeType: body.degreeType,
//         phoneNumber: body.phoneNumber,
//         graduationYear: body.graduationYear,
//         profileImage: body.profileImage,
//         ...(hashedPassword && { password: hashedPassword }),  // only update password if provided
//       },
//     });

//     return NextResponse.json(updatedUser);
//   } catch (error) {
//     console.error("API Update Error:", error);
//     return NextResponse.json({ error: "Failed to update profile" }, { status: 500 });
//   }
// }

export async function POST(req: Request) {
  const body = await req.json();
  const { email, password, fieldToUpdate, value } = body;

  try {
    // Optional: validate session
    const session = await getServerSession(authOptions);
    if (!session || !session.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Construct update object
    const updateData: any = {
      name: body.name,
      countryOfDegree: body.countryOfDegree,
      degreeType: body.degreeType,
      phoneNumber: body.phoneNumber,
      graduationYear: body.graduationYear,
      profileImage: body.profileImage,
    };

    if (password) {
      const salt = await bcrypt.genSalt(10);
      updateData.password = await bcrypt.hash(password, salt);
    }

    if (fieldToUpdate) {
      updateData[fieldToUpdate] = value; // dynamic field update
    }

    const updatedUser = await prisma.user.update({
      where: { email: session.user?.email },
      data: updateData,
    });

    return NextResponse.json(updatedUser);
  } catch (error) {
    console.error("API Update Error:", error);
    return NextResponse.json({ error: "Failed to update profile" }, { status: 500 });
  }
}