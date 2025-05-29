const { PrismaClient } = require('../lib/generated/prisma');
// import { PrismaClient } from '../lib/generated/prisma';
const prisma = new PrismaClient()

async function main() {
  const users = await prisma.user.findMany()
  console.log(users)
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
