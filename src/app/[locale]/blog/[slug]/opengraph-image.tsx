import { ImageResponse } from "next/og";
import { getLocalizedPostBySlug, getPostsForLocale } from "@/lib/posts";
import { hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import { BlogThumbnail } from "@/components/blog-thumbnail";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const runtime = "nodejs";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    getPostsForLocale(locale).map((post) => ({ locale, slug: post.slug })),
  );
}

export default async function OgImage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!hasLocale(routing.locales, locale)) return new Response("Not found", { status: 404 });
  const post = getLocalizedPostBySlug(slug, locale);

  if (!post) return new Response("Not found", { status: 404 });

  return new ImageResponse(
    <BlogThumbnail title={post.title} mode="og" />,
    { ...size },
  );
}
