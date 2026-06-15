import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "../../footer";

export default function ProjectNotFound() {
  return (
    <>
      <main className="container mx-auto flex min-h-[70vh] flex-col justify-center px-4 pt-32 md:pt-40">
        <span className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-primary">
          <span className="font-mono text-sm tabular-nums">404</span>
          <span className="h-px w-8 bg-primary" aria-hidden />
          Not found
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-semibold tracking-tight leading-[1.05] text-balance md:text-5xl">
          We couldn&apos;t find that project.
        </h1>
        <p className="mt-5 max-w-md text-lg leading-relaxed text-muted-foreground text-pretty">
          The case study you&apos;re after may have been moved or renamed. Head
          back to see everything we&apos;ve shipped recently.
        </p>
        <div className="mt-8">
          <Button asChild>
            <Link href="/#work">
              <ArrowLeft size={16} strokeWidth={1.75} aria-hidden />
              Back to selected work
            </Link>
          </Button>
        </div>
      </main>
      <Footer />
    </>
  );
}
