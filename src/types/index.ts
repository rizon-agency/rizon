import type { StaticImageData } from "next/image";

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
  title: string;
  link?: string;
  description: string;
  problem: string;
  solution: string;
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
  dimension: string;
  rizon: string;
  them: string;
};

export type Faq = {
  question: string;
  answer: string;
};

export type Alternative = {
  slug: string;
  competitor: string;
  category: string;
  metaTitle: string;
  metaDescription: string;
  heroHeadline: string;
  heroSub: string;
  intro: string[];
  whoThisIsFor: string;
  whyLeave: { title: string; body: string }[];
  whereTheyWin: { title: string; body: string }[];
  comparison: ComparisonRow[];
  migration: string;
  faqs: Faq[];
  keywords: string[];
  relatedServiceSlug?: string;
  relatedPostSlugs?: string[];
};

export type ServiceSection = { heading: string; body: string };

export type ServicePage = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  heroSub: string;
  targetKeyword: string;
  intro: string;
  forWho: string;
  problem: string;
  decisionGuide: string[];
  whatWeBuild: ServiceSection[];
  process: { step: string; detail: string }[];
  included: string[];
  costBand: string;
  outcomes: string;
  faqs: Faq[];
  relatedAlternativeSlugs?: string[];
  relatedPostSlugs?: string[];
  keywords: string[];
};
