import { Post } from "@/types";

export const posts: Post[] = [
  {
    slug: "why-custom-lms-beats-off-the-shelf",
    title: "Why Custom LMS Beats Off-the-Shelf Solutions",
    description:
      "SaaS LMS platforms look affordable until you do the math. Here is what the real cost comparison looks like over five years — and why ownership changes everything.",
    date: "2026-05-20",
    readTime: "6 min read",
    category: "LMS Development",
    coverImage: "/general-og.webp",
  },
  {
    slug: "how-to-launch-online-course-without-monthly-fees",
    title: "How to Launch an Online Course Without Paying Monthly Platform Fees",
    description:
      "Teachable, Thinkific, and Kajabi take a cut of every dollar you earn. There is a better path — and it does not require a million-dollar budget.",
    date: "2026-04-10",
    readTime: "8 min read",
    category: "Course Creation",
    coverImage: "/general-og.webp",
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
