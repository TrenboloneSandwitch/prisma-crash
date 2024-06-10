import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Create user
  // const user = await prisma.user.create({
  //   data: {
  //     name: "Jirka Kara",
  //     email: "jirkakara@gmail.com",
  //   },
  // });

  // Get all users
  // const users = await prisma.user.findMany({ include: { articles: true } });

  // Create an article and associate it with the user
  // const article = await prisma.article.create({
  //   data: {
  //     title: "Jirk Kara zivot a dilo genia",
  //     body: "Pribeh o Jirkovi",
  //     author: {
  //       connect: {
  //         id: 1,
  //       },
  //     },
  //   },
  // });

  // Get all articles
  const articles = await prisma.article.findMany();

  // Create user with article and associate them
  // const user = await prisma.user.create({
  //   data: {
  //     name: "Zdena Korenovy Vezen",
  //     email: "zdena@koren@.cz",
  //     articles: {
  //       create: {
  //         title: "Zdena Korenovy Vezen",
  //         body: "Zdena Korenovy Vezen body description",
  //       },
  //     },
  //   },
  // });

  // const article = await prisma.article.create({
  //   data: {
  //     title: "Koren 2",
  //     body: "Pribeh o korenovem vezni",
  //     author: {
  //       connect: {
  //         id: 2,
  //       },
  //     },
  //   },
  // });

  // Update user
  // const user = await prisma.user.update({
  //   where: { id: 1 },
  //   data: {
  //     name: "Jiri Kara",
  //   },
  // });

  // Remove data
  // const article = await prisma.article.delete({
  //   where: { id: 3 },
  // });
  console.log("🚀 ~ main ~ user:", articles);
}

main()
  .then(async () => {
    console.log("🚀 RUN");
  })
  .catch(async (e) => {
    console.error("🚀 ~ e:", e);
    process.exit(1);
  })
  .finally(async () => {
    console.log("--- DISCONNECT ---");
    await prisma.$disconnect();
  });
