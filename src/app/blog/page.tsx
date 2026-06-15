import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { Navigation } from "../navigation";
import { Footer } from "../footer";
import { Cta } from "../cta";
import { SectionHeader } from "@/components/section-header";
import { posts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog — Rizon Agency",
  description:
    "Insights on custom LMS development, e-learning platform architecture, and building online learning products that last.",
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  return (
    <>
      <Navigation />

      <main>
        <section className="container mx-auto px-4 pt-32 md:pt-40">
          <SectionHeader
            label="From the blog"
            title="Thinking on LMS, learning platforms, and the business of online education"
          />
        </section>

        <section className="container mx-auto px-4 mt-16">
          <div className="grid grid-cols-1 border-t border-border md:grid-cols-2 md:gap-x-12">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group relative block border-b border-border py-10"
              >
                <span
                  className="absolute left-0 -top-px h-px w-full origin-left scale-x-0 bg-primary transition-transform duration-500 ease-out group-hover:scale-x-100"
                  aria-hidden
                />

                <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
                  {post.category}
                </span>

                <h2 className="mt-4 text-2xl font-medium tracking-tight leading-snug text-balance">
                  {post.title}
                </h2>

                <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground text-pretty">
                  {post.description}
                </p>

                <div className="mt-6 flex items-center justify-between gap-4">
                  <span className="font-mono text-xs tabular-nums text-muted-foreground/60">
                    {formatDate(post.date)} · {post.readTime}
                  </span>
                  <ArrowUpRight
                    size={18}
                    strokeWidth={1.5}
                    aria-hidden
                    className="shrink-0 -translate-x-1 text-muted-foreground opacity-0 transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-100"
                  />
                </div>
              </Link>
            ))}
          </div>
        </section>

        <Cta />
      </main>

      <Footer />
    </>
  );
}
