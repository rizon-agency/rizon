import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navigation } from "../../navigation";
import { Footer } from "../../footer";

export default function BlogPostNotFound() {
  return (
    <>
      <Navigation />
      <main className="container mx-auto flex min-h-[70vh] flex-col justify-center px-4 pt-32 md:pt-40">
        <span className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-primary">
          <span className="font-mono text-sm tabular-nums">404</span>
          <span className="h-px w-8 bg-primary" aria-hidden />
          Not found
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-semibold tracking-tight leading-[1.05] text-balance md:text-5xl">
          We couldn&apos;t find that post.
        </h1>
        <p className="mt-5 max-w-md text-lg leading-relaxed text-muted-foreground text-pretty">
          The article you&apos;re looking for may have been moved or renamed.
          Head back to the blog to see everything we&apos;ve written.
        </p>
        <div className="mt-8">
          <Button asChild>
            <Link href="/blog">
              <ArrowLeft size={16} strokeWidth={1.75} aria-hidden />
              Back to the blog
            </Link>
          </Button>
        </div>
      </main>
      <Footer />
    </>
  );
}
