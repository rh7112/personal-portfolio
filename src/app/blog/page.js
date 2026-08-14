import Link from "next/link";
import { getBlogPosts } from "@/lib/portfolio-data";

export const metadata = {
  title: "Blog",
  description: "Notes, recipes, and reflections from Ryan Hurd.",
  alternates: { canonical: "/blog/" },
  openGraph: {
    title: "Blog | Ryan Hurd",
    description: "Notes, recipes, and reflections from Ryan Hurd.",
    url: "/blog/",
  },
};

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <main className="min-h-screen bg-stone-50 text-stone-900 dark:bg-stone-950 dark:text-stone-100">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-20 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-700 dark:text-orange-400">Blog</p>
          <h1 className="mt-3 text-4xl font-semibold text-stone-900 sm:text-5xl dark:text-white">
            Notes, recipes, and reflections from the road.
          </h1>
          <p className="mt-5 text-lg text-stone-600 dark:text-stone-300">
            This space is meant to hold ideas that are too long for a quick note but still worth sharing. Looking for something to cook? Check out the{" "}
            <Link href="/recipes" className="font-semibold text-orange-700 hover:text-orange-600 dark:text-orange-400 dark:hover:text-orange-300">
              recipes
            </Link>{" "}
            section instead.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {posts.map((post) => (
            <article key={post.slug} className="rounded-3xl border border-stone-900/10 bg-white/80 p-6 dark:border-white/10 dark:bg-stone-900/70">
              <div className="flex items-center justify-between gap-4">
                <p className="text-sm text-orange-700 dark:text-orange-400">{post.category}</p>
                <p className="text-sm text-stone-500 dark:text-stone-400">{post.publishedAt}</p>
              </div>
              <h2 className="mt-4 text-2xl font-semibold text-stone-900 dark:text-white">{post.title}</h2>
              <p className="mt-3 text-sm leading-7 text-stone-600 dark:text-stone-300">{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`} className="mt-6 inline-flex items-center text-sm font-semibold text-orange-700 transition hover:text-orange-600 dark:text-orange-400 dark:hover:text-orange-300">
                Read more →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
