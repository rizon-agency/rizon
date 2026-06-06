"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";

export const Cta = () => {
  return (
    <section className="container mx-auto px-4 mt-32 md:mt-40">
      <Reveal duration={0.7}>
        <div className="rounded-lg bg-primary px-6 py-16 text-primary-foreground sm:px-10 md:px-16 md:py-24">
          <div className="grid grid-cols-1 items-end gap-x-12 gap-y-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <span className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/70">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="shrink-0"><path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z" /></svg>
                Get started
              </span>
              <h2 className="mt-5 text-4xl font-semibold tracking-tight leading-[1.05] text-balance md:text-5xl lg:text-6xl">
                Your learning product deserves{" "}
                <span className="italic">its own platform.</span>
              </h2>
            </div>

            <div className="lg:col-span-5">
              <p className="text-lg leading-relaxed text-primary-foreground/80 text-pretty">
                If you want to deliver a learning experience built around your
                product, your learners, and your goals, you are in the right
                place. We build platforms that give you the control and
                flexibility to grow without limits.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button
                  size="lg"
                  asChild
                  className="bg-background text-foreground hover:bg-background/90"
                >
                  <Link href="/#contact">
                    Get in touch
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
};
