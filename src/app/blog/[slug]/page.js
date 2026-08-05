import Link from "next/link";
import { getBlogPostBySlug, getBlogPosts } from "@/lib/portfolio-data";

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    return (
      <main className="min-h-screen bg-slate-950 px-6 py-20 text-slate-100">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">Blog</p>
          <h1 className="mt-3 text-4xl font-semibold text-white">Post not found.</h1>
          <Link href="/blog" className="mt-6 inline-flex text-sky-400 transition hover:text-sky-300">
            Back to the blog →
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-20 text-slate-100">
      <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-slate-900/70 p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">{post.category}</p>
        <h1 className="mt-3 text-4xl font-semibold text-white">{post.title}</h1>
        <p className="mt-4 text-sm text-slate-400">Published {post.publishedAt}</p>
        <p className="mt-6 text-lg leading-8 text-slate-300">{post.content}</p>
        <Link href="/blog" className="mt-8 inline-flex text-sky-400 transition hover:text-sky-300">
          Back to all posts →
        </Link>
      </div>
    </main>
  );
}
