import { connect } from 'http2';
import { PrismaClient } from './generated/prisma';

const prisma = new PrismaClient();

async function main() {
  // Create user
  // const user = await prisma.user.create({
  //   data:  {
  //     name: 'John Doe',
  //     email: 'jojo@gmail.com',
  //   },
  // });

  // Get all users
 const users = await prisma.user.findMany({
  include: {
    articles: true
  }
 });

  // Create article and associate
  // const article =  await prisma.article.create({
  //   data: {
  //     title: 'Planet First Articles',
  //     body: 'Lorem ipsum',
  //     author: {
  //       connect: {
  //         id:  1
  //       }
  //     }
  //   }
  // })


  // Get all articles
  //const articles = await prisma.article.findMany();

  //Create user and article and associate them
  // const user = await prisma.user.create({
  //   data: {
  //     name: 'Sarah Smith',
  //     email: 'sara@gmail.com',
  //     articles: {
  //       create: {
  //         title: "Sara's first planet",
  //         body: "This be Sara ein first planet"
  //       }
  //     }
  //   }
  // });

  //Create another article
  // const article = await prisma.article.create({
  //   data: {
  //     title: 'Sample Planet. Episode 2',
  //     body: 'This is another sample planet',
  //     author: {
  //       connect: {
  //         id: 3
  //       }
  //     }
  //   }
  // });


  // const articles = await prisma.article.findMany();

  // console.log(user);

  // Loop over Sara's articles
  // users.forEach((user) => {
  //   console.log(`User: ${user.name}, Email: ${user.email}`);
  //   console.log('Articles:');
  //   user.articles.forEach((article) => {
  //     console.log(`-Title: ${article.title}, Body: ${article.body}`);
  //   })
  //   console.log('\n')
  // })

  // console.log(articles)

  // Update Data
  // const user = await prisma.user.update({
  //   where: {
  //     id: 1
  //   },
  //   data: {
  //     name: 'John Doe Jnr'
  //   }
  // });

  // console.log(user);


  // Remove data
  const article = await prisma.article.delete({
    where: {
      id: 4
    },
  });
  console.log(article);

  const articles = await prisma.article.findMany()
  console.log(articles)

}

main()
  .then(async() => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1)
  });