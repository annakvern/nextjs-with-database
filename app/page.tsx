import { db } from "@/prisma/db";
import Link from "next/link";
import DeletePostButton from "./ui/delete-post-button";

export default async function HomePage() {
  const posts = await db.post.findMany();

  return (
    <main className="grid gap-8 p-4">
      {posts.map((post) => (
        <Link href={"/" + post.slug} key={post.id}>
          <article className="grid p-2 rounded hover:bg-slate-100">
            <section className="flex justify-between items-center">
              <span className="text-slate-700">
                {post.createdAt.toLocaleDateString()}
              </span>
              <DeletePostButton post={post} />
            </section>
            <h2 className="text-2xl">{post.title}</h2>
            <p className="text-slate-800">{post.content}</p>
          </article>
        </Link>
      ))}
    </main>
  );
}
