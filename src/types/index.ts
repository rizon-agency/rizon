import type { StaticImageData } from "next/image";

export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
  coverImage: StaticImageData;
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
