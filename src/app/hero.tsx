"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { Button } from "@/components/ui/button";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

export const Hero = () => {
  const reduced = useReducedMotion();

  const fade = (delay: number) =>
    reduced
      ? {}
      : {
          initial: { opacity: 0, y: 40 } as const,
          animate: { opacity: 1, y: 0 } as const,
          transition: { duration: 1, delay, ease },
        };

  return (
    <section id="home" className="container pt-32 md:pt-40">
      <div className="grid grid-cols-1 items-end gap-x-12 gap-y-10 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <motion.span
            {...fade(0.2)}
            className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-primary"
          >
            <span className="h-px w-8 bg-primary" aria-hidden />
            Custom LMS development
          </motion.span>
          <motion.h1
            {...fade(0.35)}
            className="mt-6 text-5xl font-semibold tracking-tight leading-[1.02] text-balance sm:text-6xl md:text-7xl"
          >
            The platform behind your learning product, built from scratch.
          </motion.h1>
        </div>

        <motion.div
          {...fade(0.5)}
          className="lg:col-span-4"
        >
          <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
            We build custom e-learning platforms designed around how you teach,
            not how a template thinks you should. No monthly fees eating your
            revenue. No feature ceilings. A platform that is fully yours, code
            and all.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button size="lg" asChild>
              <Link href="/#contact">
                Get in touch
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/#work">
                See our work
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>

      <motion.div
        {...fade(0.7)}
        className="mt-16 border-t border-border md:mt-20"
      >
        <dl className="grid grid-cols-1 sm:grid-cols-3">
          {[
            {
              value: (
                <>
                  <span className="text-primary">0</span>%
                </>
              ),
              label: "Platform fees. You keep every dollar you earn.",
            },
            {
              value: (
                <>
                  <span className="text-primary">100</span>%
                </>
              ),
              label: "Code ownership. The platform is yours to keep.",
            },
            {
              value: (
                <>
                  Day <span className="text-primary">1</span>
                </>
              ),
              label: "Your platform goes live and stays live",
            },
          ].map((stat, i) => (
            <div
              key={i}
              className={`py-8 sm:py-10 md:py-12 ${
                i > 0
                  ? "border-t sm:border-t-0 sm:border-l border-border sm:pl-6 md:pl-8"
                  : "sm:pr-6 md:pr-8"
              } ${i === 2 ? "sm:pr-0" : ""}`}
            >
              <dt className="text-4xl font-light tracking-tight sm:text-5xl md:text-7xl">
                {stat.value}
              </dt>
              <dd className="mt-3 sm:mt-4 max-w-[18ch] text-[15px] leading-snug text-muted-foreground">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>
      </motion.div>
    </section>
  );
};
