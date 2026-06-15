import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Post } from "@/types";

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

type BlogCardProps = {
  post: Post;
  sizes?: string;
};

export const BlogCard = ({ post, sizes = "(max-width: 768px) 100vw, 45vw" }: BlogCardProps) => {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group relative block border-b border-border py-10"
    >
      <span
        className="absolute left-0 -top-px h-px w-full origin-left scale-x-0 bg-primary transition-transform duration-500 ease-out group-hover:scale-x-100"
        aria-hidden
      />

      <div className="relative mb-6 aspect-[16/9] overflow-hidden rounded-lg border border-border bg-muted">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          sizes={sizes}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>

      <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
        {post.category}
      </span>

      <h2 className="mt-4 text-xl font-medium tracking-tight leading-snug text-balance">
        {post.title}
      </h2>

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
  );
};
