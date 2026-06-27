import type { Metadata } from "next";
import { Footer } from "../footer";
import { Cta } from "../cta";
import { SectionHeader } from "@/components/section-header";
import { BlogCard } from "@/components/blog-card";
import { posts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog — Rizon Agency",
  description:
    "Insights on custom LMS development, e-learning platform architecture, and building online learning products that last.",
  alternates: { canonical: "https://rizon.agency/blog" },
  openGraph: {
    title: "Blog — Rizon Agency",
    description:
      "Insights on custom LMS development, e-learning platform architecture, and building online learning products that last.",
    url: "https://rizon.agency/blog",
    siteName: "Rizon Agency",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog — Rizon Agency",
    description:
      "Insights on custom LMS development, e-learning platform architecture, and building online learning products that last.",
    creator: "@rizon_agency",
  },
};

export default function BlogPage() {
  return (
    <>
      <main>
        <section className="container pt-32 md:pt-40">
          <SectionHeader
            label="From the blog"
            title="Thinking on LMS, learning platforms, and the business of online education"
          />
        </section>

        <section className="container mt-16">
          <div className="grid grid-cols-1 border-t border-border md:grid-cols-2 md:gap-x-12">
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
