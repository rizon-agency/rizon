import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: ["GPTBot", "OAI-SearchBot", "PerplexityBot", "Google-Extended"], allow: "/" },
    ],
    sitemap: "https://rizon.agency/sitemap.xml",
  };
}
