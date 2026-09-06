import createMDX from "@next/mdx";
import createNextIntlPlugin from "next-intl/plugin";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  images: {
    qualities: [75, 90],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      { source: "/work/wavalid", destination: "/products/wavalid", permanent: true },
      { source: "/:locale(fr|es|de)/work/wavalid", destination: "/:locale/products/wavalid", permanent: true },
    ];
  },
};

const withMDX = createMDX({
  options: {
    remarkPlugins: ["remark-gfm"],
    rehypePlugins: [
      [
        "rehype-pretty-code",
        {
          theme: {
            light: "github-light",
            dark: "github-dark",
          },
          keepBackground: false,
          defaultLang: {
            block: "text",
            inline: "text",
          },
        },
      ],
    ],
  },
});

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

export default withNextIntl(withMDX(nextConfig));
