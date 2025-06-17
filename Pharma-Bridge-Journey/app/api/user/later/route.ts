import { NextResponse } from 'next/server';
import { PrismaClient } from '@/lib/generated/prisma';


const prisma = new PrismaClient();

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

  if (!email) {
    return NextResponse.json({ error: 'Missing email' }, { status: 400 });
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
    hasPausedOnboarding: true
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
