import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Footer } from "../../footer";
import { Cta } from "../../cta";
import { posts, getPostBySlug } from "@/lib/posts";

const BASE_URL = "https://rizon.agency";

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

  const url = `${BASE_URL}/blog/${slug}`;

  return {
    title: `${post.title} — Rizon Agency`,
    description: post.description,
    authors: [{ name: "Rizon Agency", url: BASE_URL }],
    keywords: [post.category, "e-learning", "LMS development", "online learning platform", "custom LMS"],
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      siteName: "Rizon Agency",
      locale: "en_US",
      type: "article",
      publishedTime: post.date,
      authors: ["Rizon Agency"],
      tags: [post.category, "e-learning", "LMS"],
      images: [{ url: `${BASE_URL}${post.coverImage.src}`, width: post.coverImage.width, height: post.coverImage.height, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      creator: "@rizon_agency",
    },
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

  const index = posts.findIndex((p) => p.slug === slug);
  const next = posts[(index + 1) % posts.length];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: "Rizon Agency",
      url: BASE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Rizon Agency",
      url: BASE_URL,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE_URL}/blog/${slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

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

        {/* Cover image */}
        <section className="container mx-auto px-4 mt-10">
          <div className="mx-auto max-w-2xl">
            <div className="relative aspect-[16/9] overflow-hidden rounded-xl border border-border bg-muted">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 672px"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="container mx-auto px-4 mt-12">
          <div className="prose dark:prose-invert mx-auto max-w-2xl">
            <Content />
          </div>
        </section>

        {/* Next post */}
        <section className="container mx-auto px-4 mt-20">
          <div className="mx-auto max-w-2xl">
            <Link
              href={`/blog/${next.slug}`}
              className="group relative block border-t border-border py-10"
            >
              <span
                className="absolute left-0 -top-px h-px w-full origin-left scale-x-0 bg-primary transition-transform duration-500 ease-out group-hover:scale-x-100"
                aria-hidden
              />
              <div className="flex items-center justify-between gap-6">
                <div>
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground/60">
                    Next post
                  </span>
                  <h3 className="mt-3 text-2xl font-medium tracking-tight text-balance md:text-3xl">
                    {next.title}
                  </h3>
                </div>
                <ArrowRight
                  size={28}
                  strokeWidth={1.5}
                  aria-hidden
                  className="shrink-0 -translate-x-2 text-muted-foreground transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:text-foreground"
                />
              </div>
            </Link>
          </div>
        </section>

        <Cta />
      </main>

      <Footer />
    </>
  );
}
