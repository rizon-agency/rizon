import type { Post } from "@/types";
import cheatingExamsCover from "@/assets/blog/cheating-online-exams-what-actually-works.png";
import canvasBreachCover from "@/assets/blog/canvas-breach-student-data-security.png";

export const posts: Post[] = [
  {
    slug: "canvas-breach-student-data-security",
    title: "The Canvas Breach Should Change How Every Education Company Thinks About Student Data",
    description:
      "The Canvas breach wasn't a sophisticated attack. It was a basic mistake that scaled. Here's the real lesson for anyone building or running a learning platform.",
    date: "2026-06-10",
    readTime: "6 min read",
    category: "Security",
    coverImage: canvasBreachCover,
  },
  {
    slug: "cheating-online-exams-what-actually-works",
    title: "You Can't Stop Students From Cheating on Online Exams. Here's What Actually Works.",
    description:
      "Surveillance tools feel like control until they get bypassed. The platforms that get assessment right spend their budget on exam design, not monitoring.",
    date: "2026-06-01",
    readTime: "7 min read",
    category: "Assessment Design",
    coverImage: cheatingExamsCover,
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
