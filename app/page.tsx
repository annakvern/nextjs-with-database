import { db } from "@/prisma/db";

export default async function HomePage() {
  const posts = await db.post.findMany();

  return (
    <main className="grid gap-8 p-4">
      {posts.map((post) => (
        <article key={post.id} className="grid p-2 rounded hover:bg-slate-100">
          <span className="text-slate-700">
            {post.createdAt.toLocaleDateString()}
          </span>
          <h2 className="text-2xl">{post.title}</h2>
          <p className="text-slate-800">{post.content}</p>
        </article>
      ))}
    </main>
  );
}
