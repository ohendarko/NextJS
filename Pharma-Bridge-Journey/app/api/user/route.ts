
import { NextResponse } from 'next/server';
import { PrismaClient } from '@/lib/generated/prisma';


const prisma = new PrismaClient();

export async function GET(req: Request) {
  
  const { searchParams } = new URL(req.url);
  const email = searchParams.get("email");

  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    return NextResponse.json(user);
  } catch (error) {
    console.error('Error fetching user data:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}


export async function POST(req: Request) {
	console.log('POST /api/user called');
  const body = await req.json();
	console.log('Received body:', body);
  const {
    email,
    dateOfBirth,
    gender,
    phoneNumber,
    timezone,
    countryOfDegree,
    degreeType,
    graduationYear,
    degreeFile,
    passportFile,
    licenseFile,
    hasVisa,
    visaType,
    arrivalDate,
    preferredState,
    selectedPackage,
  } = body;

  if (!email || !selectedPackage) {
    return NextResponse.json({ error: 'Missing email or package' }, { status: 400 });
  }

  const dataToSave = {
    dateOfBirth: dateOfBirth ? new Date(dateOfBirth) : undefined,
    gender,
    phoneNumber,
    timezone,
    countryOfDegree,
    degreeType,
    graduationYear,
    degreeFile,
    passportFile,
    licenseFile,
    hasVisa,
    visaType,
    arrivalDate: arrivalDate ? new Date(arrivalDate) : undefined,
    preferredState,
    selectedPackage,
    hasPausedOnboarding: false,
    hasCompletedOnboarding: true
  };

  try {
    const user = await prisma.user.upsert({
      where: { email },
      update: dataToSave,
      create: {
        email,
        ...dataToSave,
      },
    });

		// if (selectedPackage) {
		// 	await prisma.packageSelection.create({
		// 		data: {
		// 			user: { connect: { email } },
		// 			packageName: selectedPackage,
		// 		}
		// 	});
		// }

    return NextResponse.json(user);
  } catch (error) {
    console.error('User POST error:', error);
    console.log('POST /api/user failed:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}

// ✅ DELETE user by email
export async function DELETE(req: Request) {
  const { searchParams } = new URL(req.url);
  const email = searchParams.get("email");

  if (!email) {
    return NextResponse.json({ error: "Missing email in query" }, { status: 400 });
  }

  try {
    const existing = await prisma.user.findUnique({ where: { email } });
    if (!existing) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    await prisma.user.delete({ where: { email } });

    return NextResponse.json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("DELETE user error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}