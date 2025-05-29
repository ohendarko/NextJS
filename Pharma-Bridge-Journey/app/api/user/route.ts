// app/api/user/route.ts
import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]/route';
import { PrismaClient } from '@/lib/generated/prisma'; // Adjust this import to match your project

const prisma = new PrismaClient();
export async function GET() {
  

  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
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
