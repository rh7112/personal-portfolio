import Link from "next/link";
import { getBlogPostBySlug, getBlogPosts } from "@/lib/portfolio-data";

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    return { title: "Post not found" };
  }

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}/` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: `/blog/${post.slug}/`,
      publishedTime: post.publishedAt ?? undefined,
    },
    twitter: {
      card: "summary",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    return (
      <main className="min-h-screen bg-stone-50 px-6 py-20 text-stone-900 dark:bg-stone-950 dark:text-stone-100">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-700 dark:text-orange-400">Blog</p>
          <h1 className="mt-3 text-4xl font-semibold text-stone-900 dark:text-white">Post not found.</h1>
          <Link href="/blog" className="mt-6 inline-flex text-orange-700 transition hover:text-orange-600 dark:text-orange-400 dark:hover:text-orange-300">
            Back to the blog →
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-stone-50 px-6 py-20 text-stone-900 dark:bg-stone-950 dark:text-stone-100">
      <div className="mx-auto max-w-3xl rounded-3xl border border-stone-900/10 bg-white/80 p-8 dark:border-white/10 dark:bg-stone-900/70">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-700 dark:text-orange-400">{post.category}</p>
        <h1 className="mt-3 text-4xl font-semibold text-stone-900 dark:text-white">{post.title}</h1>
        <p className="mt-4 text-sm text-stone-500 dark:text-stone-400">Published {post.publishedAt}</p>
        <p className="mt-6 text-lg leading-8 text-stone-600 dark:text-stone-300">{post.content}</p>
        <Link href="/blog" className="mt-8 inline-flex text-orange-700 transition hover:text-orange-600 dark:text-orange-400 dark:hover:text-orange-300">
          Back to all posts →
        </Link>
      </div>
    </main>
  );
}
