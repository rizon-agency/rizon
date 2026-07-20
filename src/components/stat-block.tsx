import type { CitedStat } from "@/types";

// Renders a quotable figure with its primary-source citation. Uses figure/figcaption
// so search and AI engines can extract the stat and attribute it.
export const StatBlock = ({ stat }: { stat: CitedStat }) => (
  <figure className="rounded-xl border border-border bg-muted/40 px-6 py-8 md:px-10 md:py-10">
    <div className="flex flex-col gap-5 md:flex-row md:items-baseline md:gap-10">
      <p className="shrink-0 text-4xl font-semibold tracking-tight text-primary md:text-5xl">
        {stat.value}
      </p>
      <figcaption className="text-lg leading-relaxed text-muted-foreground">
        {stat.label}
      </figcaption>
    </div>
    <p className="mt-6 border-t border-border pt-4 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
      Source:{" "}
      <a
        href={stat.sourceUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-foreground underline underline-offset-4 hover:text-primary"
      >
        {stat.source}
      </a>
    </p>
  </figure>
);
