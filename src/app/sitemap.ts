import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { languagesFor, localizedUrl } from "@/i18n/hreflang";
import { projects } from "@/lib/projects";
import { getPostsForLocale } from "@/lib/posts";
import { alternatives } from "@/lib/alternatives";
import { services } from "@/lib/services";

const BASE_URL = "https://rizon.agency";

type ChangeFreq = MetadataRoute.Sitemap[number]["changeFrequency"];

type LocalizedRoute = {
  path: string;
  priority: number;
  changeFrequency: ChangeFreq;
};

export default function sitemap(): MetadataRoute.Sitemap {
  const localizedRoutes: LocalizedRoute[] = [
    { path: "/", priority: 1, changeFrequency: "weekly" },
    { path: "/services", priority: 0.8, changeFrequency: "monthly" },
    { path: "/about", priority: 0.7, changeFrequency: "monthly" },
    { path: "/lms-alternatives", priority: 0.8, changeFrequency: "monthly" },
    { path: "/legal", priority: 0.3, changeFrequency: "yearly" },
    ...services.map((s) => ({
      path: `/services/${s.slug}`,
      priority: 0.8,
      changeFrequency: "monthly" as ChangeFreq,
    })),
    ...alternatives.map((a) => ({
      path: `/alternatives/${a.slug}`,
      priority: 0.8,
      changeFrequency: "monthly" as ChangeFreq,
    })),
    ...projects.map((p) => ({
      path: `/work/${p.slug}`,
      priority: 0.7,
      changeFrequency: "monthly" as ChangeFreq,
    })),
  ];

  const localizedEntries: MetadataRoute.Sitemap = localizedRoutes.flatMap(
    (r) =>
      routing.locales.map((locale) => ({
        url: localizedUrl(r.path, locale),
        lastModified: new Date(),
        changeFrequency: r.changeFrequency,
        priority: r.priority,
        alternates: { languages: languagesFor(r.path) },
      })),
  );

  const blogEntries: MetadataRoute.Sitemap = routing.locales.flatMap((locale) => {
    const prefix = locale === "en" ? "" : `/${locale}`;
    return [
      {
        url: `${BASE_URL}${prefix}/blog`,
        lastModified: new Date(),
        changeFrequency: "weekly" as ChangeFreq,
        priority: 0.8,
      },
      ...getPostsForLocale(locale).map((post) => ({
        url: `${BASE_URL}${prefix}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: "monthly" as ChangeFreq,
        priority: 0.6,
      })),
    ];
  });

  return [...localizedEntries, ...blogEntries];
}
