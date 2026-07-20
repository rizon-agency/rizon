import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { alternatives } from "@/lib/alternatives";
import { Eyebrow } from "@/components/eyebrow";
import { Footer } from "../footer";

const BASE_URL = "https://rizon.agency";

export const metadata: Metadata = {
  title: "LMS Alternatives: When a Custom Build Makes Sense | Rizon",
  description: "Compare leading LMS and course-platform alternatives, then decide whether a custom learning platform is worth the work for your business or institution.",
  alternates: { canonical: `${BASE_URL}/lms-alternatives` },
  openGraph: { title: "LMS Alternatives | Rizon", description: "An honest guide to choosing between an LMS and a custom learning platform.", url: `${BASE_URL}/lms-alternatives`, siteName: "Rizon Agency", locale: "en_US", type: "website", images: [{ url: `${BASE_URL}/opengraph-image`, width: 1200, height: 630, alt: "LMS alternatives" }] },
  twitter: { card: "summary_large_image", title: "LMS Alternatives | Rizon", description: "An honest guide to choosing between an LMS and a custom learning platform.", creator: "@rizon_agency" },
};

const faqs = [
  { question: "When is a custom LMS worth it?", answer: "When your learning experience, business rules, data, or integrations are important enough that fixed product settings create recurring manual work or lost opportunities." },
  { question: "Should we replace an LMS that already works?", answer: "Usually no. Keep a working LMS when its constraints are tolerable and its operating model suits your team. Replace it when the constraints affect a core part of your programme or product." },
  { question: "Can we migrate in stages?", answer: "Yes. A staged migration can move one programme, audience, or workflow first. It reduces risk and makes the lessons from the first release useful before a broader cutover." },
];

export default function LmsAlternativesPage() {
  const jsonLd = { "@context": "https://schema.org", "@graph": [
    { "@type": "CollectionPage", "@id": `${BASE_URL}/lms-alternatives#webpage`, url: `${BASE_URL}/lms-alternatives`, name: "LMS Alternatives", mainEntity: { "@type": "ItemList", itemListElement: alternatives.map((alternative, index) => ({ "@type": "ListItem", position: index + 1, url: `${BASE_URL}/alternatives/${alternative.slug}`, name: `${alternative.competitor} alternative` })) } },
    { "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) },
  ] };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><main>
    <section className="container pt-32 md:pt-40"><div className="max-w-4xl"><Eyebrow>Decision guide</Eyebrow><h1 className="mt-6 text-5xl font-semibold tracking-tight leading-[1.02] text-balance md:text-6xl">LMS alternatives, without pretending every team needs a custom build.</h1><p className="mt-7 max-w-3xl text-xl leading-relaxed text-muted-foreground">A hosted or open-source LMS is often the right choice. Build custom software when the platform itself is part of your offer, your operations, or your edge.</p></div></section>
    <section className="container mt-16 md:mt-20"><div className="surface overflow-x-auto"><table className="w-full min-w-[720px] text-left text-[15px]"><thead className="bg-muted/50"><tr><th scope="col" className="px-5 py-4">Platform</th><th scope="col" className="border-l border-border px-5 py-4">Best fit</th><th scope="col" className="border-l border-border px-5 py-4">Why teams consider custom</th></tr></thead><tbody>{alternatives.map((alternative) => <tr key={alternative.slug} className="border-t border-border"><th scope="row" className="px-5 py-5 font-medium"><Link href={`/alternatives/${alternative.slug}`} className="underline underline-offset-4 hover:text-primary">{alternative.competitor}</Link></th><td className="border-l border-border px-5 py-5 text-muted-foreground">{alternative.category}</td><td className="border-l border-border px-5 py-5 text-muted-foreground">{alternative.whyLeave[0].title}</td></tr>)}</tbody></table></div></section>
    <section className="container mt-24 md:mt-32"><div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">{alternatives.map((alternative) => <article key={alternative.slug} className="surface surface-hover flex flex-col p-7 md:p-8"><span className="inline-flex w-fit items-center rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">{alternative.category}</span><h2 className="mt-5 text-2xl font-semibold tracking-tight">{alternative.competitor} alternative</h2><p className="mt-3 leading-relaxed text-muted-foreground">{alternative.heroSub}</p><Link href={`/alternatives/${alternative.slug}`} className="group mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary">Read the comparison <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" aria-hidden /></Link></article>)}</div></section>
    <section className="container mt-24 md:mt-32"><div className="max-w-3xl"><span className="inline-flex items-center rounded-full bg-primary/10 px-3.5 py-1.5 text-sm font-medium text-primary">Before deciding</span><h2 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">Three questions worth answering first</h2></div><div className="surface mt-12 divide-y divide-border overflow-hidden">{faqs.map((faq) => <article key={faq.question} className="grid grid-cols-1 gap-5 px-6 py-7 md:grid-cols-12 md:px-8"><h3 className="text-lg font-medium md:col-span-5">{faq.question}</h3><p className="leading-relaxed text-muted-foreground md:col-span-7">{faq.answer}</p></article>)}</div></section>
    <section className="container mt-24 md:mt-32"><div className="rounded-3xl bg-primary px-6 py-14 text-primary-foreground md:px-12 md:py-20"><h2 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">Bring the awkward workflow to the call.</h2><p className="mt-5 max-w-2xl text-lg leading-relaxed text-primary-foreground/80">We will help you sort a practical upgrade from a platform replacement. Sometimes the right answer is to keep what you have.</p><Button size="lg" asChild className="mt-8 bg-background text-foreground hover:bg-background/90"><Link href="https://cal.com/rizon.agency-cvbkll/30min" target="_blank" rel="noreferrer">Book a 30-minute call <ArrowRight size={16} aria-hidden /></Link></Button></div></section>
  </main><Footer /></>;
}
