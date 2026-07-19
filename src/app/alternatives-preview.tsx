import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { alternatives } from "@/lib/alternatives";
import { SectionHeader } from "@/components/section-header";

export const AlternativesPreview = () => {
  const featured = alternatives.slice(0, 3);
  return <section className="container mt-32 md:mt-40"><SectionHeader label="Considering a switch" title="The platform you use should not dictate the product you can sell." description="Honest comparisons for teams deciding whether to keep, configure, or replace their current LMS." /><div className="mt-12 grid grid-cols-1 border-t border-border md:grid-cols-3">{featured.map((alternative) => <article key={alternative.slug} className="border-b border-border py-8 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0 md:last:pr-0"><span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">{alternative.category}</span><h3 className="mt-4 text-2xl font-medium tracking-tight">{alternative.competitor} alternative</h3><p className="mt-3 leading-relaxed text-muted-foreground">{alternative.heroSub}</p><Link href={`/alternatives/${alternative.slug}`} className="group mt-6 inline-flex items-center gap-2 text-sm font-medium">Read the comparison <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" aria-hidden /></Link></article>)}</div><Link href="/lms-alternatives" className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground">Browse all LMS alternatives <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" aria-hidden /></Link></section>;
};
