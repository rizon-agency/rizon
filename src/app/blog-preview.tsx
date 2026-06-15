"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { posts } from "@/lib/posts";
import { SectionHeader } from "@/components/section-header";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { BlogCard } from "@/components/blog-card";

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
            <BlogCard post={post} />
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
