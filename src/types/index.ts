import type { StaticImageData } from "next/image";
import type { MaybeLocalized } from "@/lib/l10n";

export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
  coverImage: StaticImageData;
  relatedServiceSlug?: string;
  relatedAlternativeSlugs?: string[];
  relatedPostSlugs?: string[];
  authorSlug?: string;
};

export type Project = {
  slug: string;
  title: MaybeLocalized<string>;
  link?: string;
  description: MaybeLocalized<string>;
  problem: MaybeLocalized<string>;
  solution: MaybeLocalized<string>;
  year: string;
  preview: string;
  tech: string[];
  images: GalleryImage[];
};

export type GalleryImage = {
  src: string;
  width: number;
  height: number;
};

export type ComparisonRow = {
  dimension: MaybeLocalized<string>;
  rizon: MaybeLocalized<string>;
  them: MaybeLocalized<string>;
};

export type Faq = {
  question: MaybeLocalized<string>;
  answer: MaybeLocalized<string>;
};

// A quotable, extractable figure with a primary-source citation (GEO / AI-search).
export type CitedStat = {
  value: string; // the headline figure or term, e.g. "SCORM 1.2" or "IMSCC"
  label: MaybeLocalized<string>; // what it means, in one sentence
  source: string; // the primary source's name
  sourceUrl: string; // outbound link to that primary source
};

export type Alternative = {
  slug: string;
  competitor: string;
  category: MaybeLocalized<string>;
  metaTitle: MaybeLocalized<string>;
  metaDescription: MaybeLocalized<string>;
  heroHeadline: MaybeLocalized<string>;
  heroSub: MaybeLocalized<string>;
  intro: MaybeLocalized<string[]>;
  whoThisIsFor: MaybeLocalized<string>;
  whyLeave: { title: MaybeLocalized<string>; body: MaybeLocalized<string> }[];
  whereTheyWin: { title: MaybeLocalized<string>; body: MaybeLocalized<string> }[];
  comparison: ComparisonRow[];
  migration: MaybeLocalized<string>;
  faqs: Faq[];
  stat?: CitedStat;
  keywords: string[];
  relatedServiceSlug?: string;
  relatedPostSlugs?: string[];
};

export type ServiceSection = {
  heading: MaybeLocalized<string>;
  body: MaybeLocalized<string>;
};

export type ServicePage = {
  slug: string;
  title: MaybeLocalized<string>;
  metaTitle: MaybeLocalized<string>;
  metaDescription: MaybeLocalized<string>;
  h1: MaybeLocalized<string>;
  heroSub: MaybeLocalized<string>;
  targetKeyword: MaybeLocalized<string>;
  whoWeWorkWith: { audience: MaybeLocalized<string>; description: MaybeLocalized<string> }[];
  problemsWeSolve: { problem: MaybeLocalized<string>; solution: MaybeLocalized<string> }[];
  whatWeBuild: ServiceSection[];
  process: { step: MaybeLocalized<string>; detail: MaybeLocalized<string> }[];
  included: MaybeLocalized<string[]>;
  costBand: MaybeLocalized<string>;
  outcomes: MaybeLocalized<string>;
  faqs: Faq[];
  stat?: CitedStat;
  relatedAlternativeSlugs?: string[];
  relatedPostSlugs?: string[];
  keywords: string[];
};
