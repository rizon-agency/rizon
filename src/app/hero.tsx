"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero.jpg";

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
    <section id="home" className="px-3 pt-3 sm:px-4 sm:pt-4 lg:px-6">
      {/* Inset, rounded hero card with full-bleed background image */}
      <div className="relative isolate flex min-h-[580px] flex-col overflow-hidden rounded-[28px] sm:min-h-[640px] lg:min-h-[720px] lg:rounded-[36px]">
        <Image
          src={heroImage}
          alt=""
          fill
          priority
          placeholder="blur"
          sizes="100vw"
          className="-z-10 object-cover"
        />
        {/* Dark overlay for legibility of the white nav + copy */}
        <div aria-hidden className="absolute inset-0 -z-10 bg-black/55" />
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-linear-to-b from-black/60 via-black/25 to-black/60"
        />

        {/* Centered hero content, cleared below the overlaid navigation */}
        <div className="flex flex-1 flex-col items-center justify-center px-6 pt-24 pb-16 text-center sm:px-10">
          <motion.h1
            {...fade(0.25)}
            className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-tight text-balance text-white sm:text-6xl md:text-7xl"
          >
            The platform behind your learning product, built from scratch.
          </motion.h1>

          <motion.p
            {...fade(0.5)}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-pretty text-white/75"
          >
            We build custom e-learning platforms designed around how you teach,
            not how a template thinks you should. No monthly fees, no feature
            ceilings — a platform that is fully yours, code and all.
          </motion.p>

          <motion.div
            {...fade(0.62)}
            className="mt-10 flex flex-wrap items-center justify-center gap-3"
          >
            <Button size="lg" asChild>
              <Link href="/#contact">Get in touch</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
            >
              <Link href="/#work">See our work</Link>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Stats row below the card */}
      <motion.div {...fade(0.7)} className="container mt-10">
        <dl className="grid grid-cols-1 border-border sm:grid-cols-3">
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
                  ? "border-t border-border sm:border-t-0 sm:border-l sm:pl-6 md:pl-8"
                  : "sm:pr-6 md:pr-8"
              } ${i === 2 ? "sm:pr-0" : ""}`}
            >
              <dt className="text-4xl font-light tracking-tight sm:text-5xl md:text-7xl">
                {stat.value}
              </dt>
              <dd className="mt-3 max-w-[18ch] text-[15px] leading-snug text-muted-foreground sm:mt-4">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>
      </motion.div>
    </section>
  );
};
