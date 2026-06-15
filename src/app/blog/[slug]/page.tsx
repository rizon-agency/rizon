import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { Footer } from "../../footer";
import { Cta } from "../../cta";
import { posts, getPostBySlug } from "@/lib/posts";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: "Post not found — Rizon" };
  }

  return {
    title: `${post.title} — Rizon`,
    description: post.description,
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const { default: Content } = await import(`@/content/blog/${slug}.mdx`);

  return (
    <>

      <main>
        {/* Header */}
        <section className="container mx-auto px-4 pt-24 md:pt-28">
          <div className="mx-auto max-w-2xl">
            <Link
              href="/blog"
              className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft
                size={15}
                strokeWidth={1.75}
                aria-hidden
                className="transition-transform duration-300 ease-out group-hover:-translate-x-1"
              />
              All posts
            </Link>

            <div className="mt-6">
              <span className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-primary">
                <span className="h-px w-8 bg-primary" aria-hidden />
                {post.category}
              </span>
              <h1 className="mt-6 text-4xl font-semibold tracking-tight leading-[1.05] text-balance md:text-5xl">
                {post.title}
              </h1>
              <p className="mt-5 font-mono text-sm tabular-nums text-muted-foreground/60">
                {formatDate(post.date)} · {post.readTime}
              </p>
            </div>

            <div className="mt-4 border-t border-border" />
          </div>
        </section>

        {/* Content */}
        <section className="container mx-auto px-4 mt-12">
          <div className="prose prose-invert mx-auto max-w-2xl">
            <Content />
          </div>
        </section>

        <Cta />
      </main>

      <Footer />
    </>
  );
}
