const { PrismaClient } = require('../lib/generated/prisma');
const prisma = new PrismaClient();

async function main() {
  const newUser = await prisma.user.create({
    data: {
      email: 'testuser@example.com',
      name: 'Test User',
      password: 'hashedpassword123', // ideally hash passwords in real apps
    },
  });
  console.log('Created user:', newUser);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
