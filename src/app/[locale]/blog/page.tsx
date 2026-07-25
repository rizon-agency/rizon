import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Footer } from "../footer";
import { Cta } from "../cta";
import { SectionHeader } from "@/components/section-header";
import { BlogCard } from "@/components/blog-card";
import { getPostsForLocale } from "@/lib/posts";
import { languagesFor, localizedUrl, OG_LOCALE } from "@/i18n/hreflang";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);
  const t = await getTranslations("seo.blog");
  const path = "/blog";

  return {
    title: t("title"),
    description: t("description"),
    alternates: { canonical: localizedUrl(path, locale), languages: languagesFor(path) },
    openGraph: { title: t("title"), description: t("description"), url: localizedUrl(path, locale), siteName: "Rizon", locale: OG_LOCALE[locale], type: "website" },
    twitter: { card: "summary_large_image", title: t("title"), description: t("description"), creator: "@rizon_agency" },
  };
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);
  const t = await getTranslations("blogPage");
  const posts = getPostsForLocale(locale);
  return (
    <>
      <main>
        <section className="container pt-32 md:pt-40">
          <SectionHeader
            label={t("eyebrow")}
            title={t("title")}
          />
        </section>

        <section className="container mt-16">
          <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-12">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </section>

        <Cta />
      </main>

      <Footer />
    </>
  );
}
