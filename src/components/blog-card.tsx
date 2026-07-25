"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { ArrowUpRight } from "lucide-react";
import { useFormatter, useTranslations } from "next-intl";
import { Badge } from "@/components/ui/badge";
import type { Post } from "@/types";

const NEW_THRESHOLD_DAYS = 30;

function isNew(dateStr: string) {
  const diff = Date.now() - new Date(dateStr).getTime();
  return diff < NEW_THRESHOLD_DAYS * 24 * 60 * 60 * 1000;
}

type BlogCardProps = {
  post: Post;
  sizes?: string;
};

export const BlogCard = ({ post, sizes = "(max-width: 768px) 100vw, 45vw" }: BlogCardProps) => {
  const format = useFormatter();
  const t = useTranslations("blogPage");
  const formatted = format.dateTime(new Date(post.date), {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="surface surface-hover group flex h-full flex-col overflow-hidden"
    >
      <div className="relative aspect-[16/9] overflow-hidden bg-muted">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          sizes={sizes}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-6 md:p-7">
        <div className="flex items-center gap-2">
          <span className="text-xs font-medium text-primary">
            {post.category}
          </span>
          {isNew(post.date) && <Badge>{t("new")}</Badge>}
        </div>

        <h2 className="mt-3 text-xl font-semibold tracking-tight leading-snug text-balance">
          {post.title}
        </h2>

        <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground text-pretty">
          {post.description}
        </p>

        <div className="mt-auto flex items-center justify-between gap-4 pt-6">
          <span className="font-mono text-xs tabular-nums text-muted-foreground/60">
            {formatted} · {post.readTime}
          </span>
          <ArrowUpRight
            size={18}
            strokeWidth={1.5}
            aria-hidden
            className="shrink-0 text-muted-foreground opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100"
          />
        </div>
      </div>
    </Link>
  );
};
