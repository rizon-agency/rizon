import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const runtime = "nodejs";

export default function OgImage() {
  return new ImageResponse(
    (
      <div tw="flex flex-col w-full h-full bg-white px-20 py-16">
        {/* Top: category-style label */}
        <div tw="flex items-center mb-12">
          <div tw="w-8 h-px bg-[#003de5] mr-3" />
          <span tw="text-[#003de5] text-xs font-semibold tracking-widest uppercase">
            Custom LMS Development
          </span>
        </div>

        {/* Main heading */}
        <div tw="text-[#0a0a0a] text-6xl font-semibold leading-tight tracking-tight max-w-3xl mb-8">
          The platform behind your learning product, built from scratch.
        </div>

        {/* Description */}
        <div tw="text-[#6b6b6b] text-xl leading-relaxed max-w-2xl flex-1">
          No monthly fees. No feature limits. No vendor lock-in. A platform
          that is fully yours, code and all.
        </div>

        {/* Bottom bar */}
        <div tw="flex items-center justify-between border-t border-[#e5e5e5] pt-6">
          <div tw="flex items-center gap-4">
            <span tw="text-[#6b6b6b] text-sm">0% platform fees</span>
            <span tw="text-[#e5e5e5]">·</span>
            <span tw="text-[#6b6b6b] text-sm">100% code ownership</span>
            <span tw="text-[#e5e5e5]">·</span>
            <span tw="text-[#6b6b6b] text-sm">Live on day 1</span>
          </div>
          <span tw="text-[#0a0a0a] text-xl font-semibold tracking-tight">
            rizon.agency
          </span>
        </div>
      </div>
    ),
    { ...size },
  );
}
