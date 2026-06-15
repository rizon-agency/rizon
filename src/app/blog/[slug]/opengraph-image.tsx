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
  const imgData = fs.readFileSync(imgPath);
  const imgSrc = `data:image/png;base64,${imgData.toString("base64")}`;

  const date = formatDate(post.date);

  return new ImageResponse(
    (
      <div tw="flex w-full h-full bg-[#0f0f0f]">
        {/* Left: card content */}
        <div tw="flex flex-col flex-1 p-14">
          {/* Category */}
          <div tw="flex items-center mb-7">
            <div tw="w-8 h-px bg-[#5b5bd6] mr-3" />
            <span tw="text-[#5b5bd6] text-xs font-semibold tracking-widest uppercase">
              {post.category}
            </span>
          </div>

          {/* Title */}
          <div tw="text-[#fafafa] text-4xl font-semibold leading-tight tracking-tight mb-5 max-w-lg">
            {post.title}
          </div>

          {/* Description */}
          <div tw="text-[#888] text-lg leading-relaxed flex-1 max-w-lg">
            {post.description}
          </div>

          {/* Bottom bar */}
          <div tw="flex items-center justify-between border-t border-[rgba(255,255,255,0.08)] pt-5">
            <span tw="text-[#555] text-xs tracking-wide">
              {date} · {post.readTime}
            </span>
            <span tw="text-[#fafafa] text-base font-semibold tracking-tight">
              .rizon
            </span>
          </div>
        </div>

        {/* Right: cover image */}
        <div tw="flex w-[420px] shrink-0 border-l border-[rgba(255,255,255,0.08)]">
          <img src={imgSrc} tw="w-full h-full" style={{ objectFit: "cover" }} />
        </div>
      </div>
    ),
    { ...size },
  );
}
