import fs from "fs";
import path from "path";
import { ImageResponse } from "next/og";
import { posts, getPostBySlug } from "@/lib/posts";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const runtime = "nodejs";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function OgImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) return new Response("Not found", { status: 404 });

  const imgPath = path.join(process.cwd(), "src/assets/blog", `${slug}.png`);
  let imgSrc: string | null = null;
  try {
    const imgData = fs.readFileSync(imgPath);
    imgSrc = `data:image/png;base64,${imgData.toString("base64")}`;
  } catch {
    imgSrc = null;
  }

  const date = formatDate(post.date);

  return new ImageResponse(
    (
      <div tw="flex w-full h-full bg-white">
        {/* Left: card content */}
        <div tw="flex flex-col flex-1 p-14">
          {/* Category */}
          <div tw="flex items-center mb-7">
            <div tw="w-8 h-px bg-[#003de5] mr-3" />
            <span tw="text-[#003de5] text-xs font-semibold tracking-widest uppercase">
              {post.category}
            </span>
          </div>

          {/* Title */}
          <div tw="text-[#0a0a0a] text-4xl font-semibold leading-tight tracking-tight mb-5 max-w-lg">
            {post.title}
          </div>

          {/* Description */}
          <div tw="text-[#6b6b6b] text-lg leading-relaxed flex-1 max-w-lg">
            {post.description}
          </div>

          {/* Bottom bar */}
          <div tw="flex items-center justify-between border-t border-[#e5e5e5] pt-5">
            <span tw="text-[#6b6b6b] text-xs tracking-wide">
              {date} · {post.readTime}
            </span>
            <span tw="text-[#0a0a0a] text-base font-semibold tracking-tight">
              .rizon
            </span>
          </div>
        </div>

        {/* Right: cover image (or themed fallback) */}
        <div tw="flex w-[420px] shrink-0 border-l border-[#e5e5e5]">
          {imgSrc ? (
            <img src={imgSrc} tw="w-full h-full" style={{ objectFit: "cover" }} />
          ) : (
            <div tw="flex flex-col justify-between w-full h-full bg-[#f5f5f5] p-12">
              <div tw="flex items-center">
                <div tw="w-8 h-px bg-[#003de5] mr-3" />
                <span tw="text-[#003de5] text-xs font-semibold tracking-widest uppercase">
                  {post.category}
                </span>
              </div>
              <span tw="text-[#0a0a0a] text-6xl font-semibold tracking-tight">
                .rizon
              </span>
            </div>
          )}
        </div>
      </div>
    ),
    { ...size },
  );
}
