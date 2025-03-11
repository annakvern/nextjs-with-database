import { db } from "./db";

async function main() {
  await db.post.deleteMany();
  await db.post.createMany({
    data: [
      {
        title: "Introduction to TypeScript",
        content:
          "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. It adds static typing to the language, making it more robust and scalable.",
        author: "John Doe",
      },
      {
        title: "Why React is so Popular",
        content:
          "React is a JavaScript library for building user interfaces. Its component-based architecture and virtual DOM make it efficient and easy to develop complex applications.",
        author: "Jane Smith",
      },
      {
        title: "Understanding Next.js",
        content:
          "Next.js is a React framework that enables server-side rendering and static site generation. It provides great performance optimizations and developer experience.",
        author: "Alice Johnson",
      },
      {
        title: "State Management in React",
        content:
          "There are several ways to manage state in React applications, including useState, useReducer, and external libraries like Redux or Zustand.",
        author: "Bob Williams",
      },
      {
        title: "The Power of TypeScript Generics",
        content:
          "Generics in TypeScript allow developers to create reusable and flexible components by enabling types to be passed as parameters.",
        author: "Charlie Brown",
      },
    ],
  });
}

main()
  .then(async () => {
    console.log("🌱 Seeded database successfully!");
    await db.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await db.$disconnect();
    process.exit(1);
  });
