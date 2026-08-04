import Link from "next/link";
import { getBlogPosts } from "@/lib/portfolio-data";

export const metadata = {
  title: "Blog | Ryan Hurd",
  description: "Notes, recipes, and reflections from Ryan Hurd.",
};

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-20 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">Blog</p>
          <h1 className="mt-3 text-4xl font-semibold text-white sm:text-5xl">
            Notes, recipes, and reflections from the road.
          </h1>
          <p className="mt-5 text-lg text-slate-300">
            This space is meant to hold ideas that are too long for a quick note but still worth sharing. It is a simple home for thoughts, lessons, and the occasional recipe.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {posts.map((post) => (
            <article key={post.slug} className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
              <div className="flex items-center justify-between gap-4">
                <p className="text-sm text-sky-400">{post.category}</p>
                <p className="text-sm text-slate-400">{post.publishedAt}</p>
              </div>
              <h2 className="mt-4 text-2xl font-semibold text-white">{post.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-300">{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`} className="mt-6 inline-flex items-center text-sm font-semibold text-sky-400 transition hover:text-sky-300">
                Read more →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
