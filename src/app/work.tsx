"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/projects";
import { SectionHeader } from "@/components/section-header";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";

export const Work = () => {
  return (
    <section id="work" className="container mx-auto px-4 mt-32 md:mt-40">
      <Reveal>
        <SectionHeader
          label="Selected work"
          title={
            <>
              What we have been{" "}
              <span className="text-primary italic">building</span>
            </>
          }
          description="A few platforms we have shipped recently. Real products, in production, doing real work."
        />
      </Reveal>

      <RevealGroup stagger={0.12} className="mt-16 grid grid-cols-1 border-t border-border md:grid-cols-2 md:gap-x-12">
        {projects.map(({ slug, title, tech, description, preview }, index) => (
          <RevealItem key={slug} duration={0.6} y={20}>
            <Link
              href={`/work/${slug}`}
              className="group relative block border-b border-border py-10"
            >
              <span
                className="absolute left-0 -top-px h-px w-full origin-left scale-x-0 bg-primary transition-transform duration-500 ease-out group-hover:scale-x-100"
                aria-hidden
              />

              <div className="relative mb-8 aspect-video overflow-hidden rounded-lg border border-border bg-muted">
                <Image
                  src={preview}
                  alt={title}
                  fill
                  sizes="(max-width: 768px) 100vw, 45vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              <div className="flex items-start justify-between gap-4">
                <span className="font-mono text-2xl font-normal tabular-nums leading-none text-muted-foreground/60 transition-colors duration-300 group-hover:text-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <ArrowUpRight
                  size={22}
                  strokeWidth={1.5}
                  aria-hidden
                  className="shrink-0 -translate-x-1 text-muted-foreground opacity-0 transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-100"
                />
              </div>

              <h3 className="mt-7 text-2xl font-medium tracking-tight text-balance">
                {title}
              </h3>

              <ul className="mt-4 flex flex-wrap gap-2">
                {tech.map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-border px-2.5 py-0.5 font-mono text-[11px] uppercase tracking-wider text-muted-foreground"
                  >
                    {t}
                  </li>
                ))}
              </ul>

              <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
                {description}
              </p>
            </Link>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
};
