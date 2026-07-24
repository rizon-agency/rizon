import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { BlogPreview } from "./blog-preview";
import { Contact } from "./contact";
import { Cta } from "./cta";
import { Faq } from "./faq";
import { Features } from "./features";
import { Footer } from "./footer";
import { Hero } from "./hero";
import { HowWeWork } from "./how-we-work";
import { Services } from "./services";
import { WhyUs } from "./why-us";
import { Work } from "./work";
import { AlternativesPreview } from "./alternatives-preview";
import { Trust } from "./trust";
import { faqs } from "@/lib/faq";
import {
  languagesFor,
  localizedUrl,
  OG_LOCALE,
} from "@/i18n/hreflang";
import { hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";

const BASE_URL = "https://rizon.agency";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);
  const t = await getTranslations("seo.home");
  const path = "/";
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: localizedUrl(path, locale),
      languages: languagesFor(path),
    },
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      url: localizedUrl(path, locale),
      siteName: "Rizon",
      locale: OG_LOCALE[locale],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t("twitterTitle"),
      description: t("twitterDescription"),
      creator: "@rizon_agency",
    },
  };
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/#org`,
      name: "Rizon",
      url: BASE_URL,
      logo: `${BASE_URL}/android-chrome-512x512.png`,
      email: "contact@rizon.agency",
      sameAs: [
        "https://www.linkedin.com/in/choaib-mouhrach",
        "https://x.com/rizon_agency",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        email: "contact@rizon.agency",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "Rizon",
      publisher: { "@id": `${BASE_URL}/#org` },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${BASE_URL}/#service`,
      name: "Rizon",
      url: BASE_URL,
      description:
        "Custom e-learning platform development for course creators, schools, and companies. No vendor lock-in, no monthly fees, 100% code ownership.",
      serviceType: "Custom Software Development",
      areaServed: "Worldwide",
      parentOrganization: { "@id": `${BASE_URL}/#org` },
      knowsAbout: [
        "Custom LMS Development",
        "E-Learning Platform Development",
        "Learning Management Systems",
        "Corporate Training Platforms",
        "School Portal Development",
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${BASE_URL}/#faq`,
      mainEntity: faqs.map(({ question, answer }) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: {
          "@type": "Answer",
          text: answer,
        },
      })),
    },
  ],
};

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div>
        <Hero />
        <WhyUs />
        <HowWeWork />
        <Services />
        <Features />
        <AlternativesPreview />
        <Work />
        <Trust />
        <BlogPreview />
        <Cta />
        <Faq />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
