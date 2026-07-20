import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { alternatives } from "@/lib/alternatives";
import { SectionHeader } from "@/components/section-header";

export const AlternativesPreview = () => {
  const featured = alternatives.slice(0, 3);
  return (
    <section className="container mt-32 md:mt-40">
      <SectionHeader
        label="Considering a switch"
        title="The platform you use should not dictate the product you can sell."
        description="Honest comparisons for teams deciding whether to keep, configure, or replace their current LMS."
      />
      <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
        {featured.map((alternative) => (
          <article
            key={alternative.slug}
            className="surface surface-hover flex flex-col p-7 md:p-8"
          >
            <span className="inline-flex w-fit items-center rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
              {alternative.category}
            </span>
            <h3 className="mt-5 text-2xl font-semibold tracking-tight">
              {alternative.competitor} alternative
            </h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              {alternative.heroSub}
            </p>
            <Link
              href={`/alternatives/${alternative.slug}`}
              className="group mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary"
            >
              Read the comparison{" "}
              <ArrowRight
                size={15}
                className="transition-transform group-hover:translate-x-1"
                aria-hidden
              />
            </Link>
          </article>
        ))}
      </div>
      <Link
        href="/lms-alternatives"
        className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground"
      >
        Browse all LMS alternatives{" "}
        <ArrowRight
          size={15}
          className="transition-transform group-hover:translate-x-1"
          aria-hidden
        />
      </Link>
    </section>
  );
};
