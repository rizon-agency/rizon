"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { posts } from "@/lib/posts";
import { SectionHeader } from "@/components/section-header";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";
import { Button } from "@/components/ui/button";

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

const preview = posts.slice(0, 3);

export const BlogPreview = () => {
  return (
    <section id="blog" className="container mx-auto px-4 mt-32 md:mt-40">
      <Reveal>
        <div className="flex items-end justify-between gap-6">
          <SectionHeader
            label="From the blog"
            title={
              <>
                Thinking on{" "}
                <span className="text-primary italic">e-learning</span>
              </>
            }
          />
          <div className="hidden md:block shrink-0">
            <Button variant="outline" size="sm" asChild>
              <Link href="/blog">
                All posts
                <ArrowUpRight size={14} strokeWidth={1.75} aria-hidden />
              </Link>
            </Button>
          </div>
        </div>
      </Reveal>

      <RevealGroup
        stagger={0.12}
        className="mt-16 grid grid-cols-1 border-t border-border md:grid-cols-2 md:gap-x-12"
      >
        {preview.map((post) => (
          <RevealItem key={post.slug} duration={0.6} y={20}>
            <Link
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

              <h3 className="mt-4 text-xl font-medium tracking-tight leading-snug text-balance">
                {post.title}
              </h3>

              <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground text-pretty">
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
          </RevealItem>
        ))}
      </RevealGroup>

      <div className="mt-8 md:hidden">
        <Button variant="outline" size="sm" asChild>
          <Link href="/blog">
            All posts
            <ArrowUpRight size={14} strokeWidth={1.75} aria-hidden />
          </Link>
        </Button>
      </div>
    </section>
  );
};
