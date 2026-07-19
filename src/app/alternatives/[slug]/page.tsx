import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumb, breadcrumbJsonLd, type Crumb } from "@/components/breadcrumb";
import { alternatives, getAlternativeBySlug } from "@/lib/alternatives";
import { posts } from "@/lib/posts";
import { getServiceBySlug } from "@/lib/services";
import { Footer } from "../../footer";

const BASE_URL = "https://rizon.agency";

export function generateStaticParams() {
  return alternatives.map((alternative) => ({ slug: alternative.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const alternative = getAlternativeBySlug(slug);

  if (!alternative) return { title: "Alternative not found — Rizon" };

  const url = `${BASE_URL}/alternatives/${slug}`;
  return {
    title: alternative.metaTitle,
    description: alternative.metaDescription,
    keywords: alternative.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: alternative.metaTitle,
      description: alternative.metaDescription,
      url,
      siteName: "Rizon Agency",
      locale: "en_US",
      type: "website",
      images: [{ url: `${BASE_URL}/opengraph-image`, width: 1200, height: 630, alt: alternative.heroHeadline }],
    },
    twitter: {
      card: "summary_large_image",
      title: alternative.metaTitle,
      description: alternative.metaDescription,
      creator: "@rizon_agency",
    },
  };
}

export default async function AlternativePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const alternative = getAlternativeBySlug(slug);
  if (!alternative) notFound();

  const url = `${BASE_URL}/alternatives/${slug}`;
  const crumbs: Crumb[] = [
    { name: "Home", href: "/" },
    { name: "Alternatives", href: "/lms-alternatives" },
    { name: alternative.competitor, href: `/alternatives/${slug}` },
  ];
  const relatedPosts = posts.filter((post) => alternative.relatedPostSlugs?.includes(post.slug));
  const relatedService = alternative.relatedServiceSlug ? getServiceBySlug(alternative.relatedServiceSlug) : undefined;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: alternative.metaTitle,
        description: alternative.metaDescription,
        about: {
          "@type": "Thing",
          name: `${alternative.competitor} alternative comparison`,
          description: `A comparison of a custom LMS build and ${alternative.competitor}.`,
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: alternative.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
      breadcrumbJsonLd(crumbs),
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: "Custom LMS development",
        serviceType: "Custom LMS development",
        provider: { "@id": `${BASE_URL}/#org` },
        areaServed: "Worldwide",
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main>
        <section className="container pt-24 md:pt-28">
          <Breadcrumb items={crumbs} />
          <div className="mt-10 max-w-4xl">
            <span className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-primary">
              <span className="h-px w-8 bg-primary" aria-hidden />
              {alternative.category}
            </span>
            <h1 className="mt-6 text-5xl font-semibold tracking-tight leading-[1.02] text-balance md:text-6xl">
              {alternative.heroHeadline}
            </h1>
            <p className="mt-7 max-w-3xl text-xl leading-relaxed text-muted-foreground text-pretty">
              {alternative.heroSub}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild size="lg"><Link href="https://cal.com/rizon.agency-cvbkll/30min" target="_blank" rel="noreferrer">Book a call <ArrowRight size={16} aria-hidden /></Link></Button>
              <Button asChild size="lg" variant="outline"><Link href="#comparison">See the comparison</Link></Button>
            </div>
          </div>
        </section>

        <section className="container mt-24 md:mt-32">
          <div className="grid grid-cols-1 gap-12 border-t border-border pt-10 lg:grid-cols-12">
            <div className="lg:col-span-4"><span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">The direct answer</span></div>
            <div className="space-y-5 text-lg leading-relaxed text-muted-foreground lg:col-span-7 lg:col-start-6">
              {alternative.intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              <p className="border-l-2 border-primary pl-5 text-foreground"><strong>Who this is for:</strong> {alternative.whoThisIsFor}</p>
            </div>
          </div>
        </section>

        <section className="container mt-24 md:mt-32">
          <div className="max-w-3xl"><span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">Where the friction starts</span><h2 className="mt-5 text-4xl font-semibold tracking-tight text-balance md:text-5xl">Why teams leave {alternative.competitor}</h2></div>
          <div className="mt-12 grid grid-cols-1 border-t border-border md:grid-cols-2">
            {alternative.whyLeave.map((item, index) => <article key={item.title} className="border-b border-border py-8 md:pr-10 md:odd:border-r md:odd:pr-12 md:even:pl-12"><span className="font-mono text-sm text-primary">0{index + 1}</span><h3 className="mt-5 text-2xl font-medium tracking-tight">{item.title}</h3><p className="mt-4 leading-relaxed text-muted-foreground">{item.body}</p></article>)}
          </div>
        </section>

        <section id="comparison" className="container mt-24 scroll-mt-24 md:mt-32">
          <div className="max-w-3xl"><span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">Side by side</span><h2 className="mt-5 text-4xl font-semibold tracking-tight text-balance md:text-5xl">Custom build vs {alternative.competitor}</h2></div>
          <div className="mt-12 overflow-x-auto border border-border rounded-xl"><table className="w-full min-w-[720px] text-left text-[15px]"><thead className="bg-muted/50"><tr><th scope="col" className="w-1/4 px-5 py-4 font-medium">Dimension</th><th scope="col" className="w-[37.5%] border-l border-border px-5 py-4 font-medium">Rizon (custom build)</th><th scope="col" className="w-[37.5%] border-l border-border px-5 py-4 font-medium">{alternative.competitor}</th></tr></thead><tbody>{alternative.comparison.map((row) => <tr key={row.dimension} className="border-t border-border align-top"><th scope="row" className="px-5 py-5 font-medium">{row.dimension}</th><td className="border-l border-border px-5 py-5 leading-relaxed text-muted-foreground">{row.rizon}</td><td className="border-l border-border px-5 py-5 leading-relaxed text-muted-foreground">{row.them}</td></tr>)}</tbody></table></div>
        </section>

        <section className="container mt-24 md:mt-32"><div className="grid grid-cols-1 gap-12 border-t border-border pt-10 lg:grid-cols-12"><div className="lg:col-span-4"><span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">The honest case</span><h2 className="mt-5 text-3xl font-semibold tracking-tight">Where {alternative.competitor} is genuinely the better choice</h2></div><div className="space-y-7 lg:col-span-7 lg:col-start-6">{alternative.whereTheyWin.map((item) => <article key={item.title}><h3 className="text-xl font-medium tracking-tight">{item.title}</h3><p className="mt-3 leading-relaxed text-muted-foreground">{item.body}</p></article>)}</div></div></section>

        <section className="container mt-24 md:mt-32"><div className="rounded-xl bg-muted px-6 py-10 md:px-10 md:py-14"><span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">Migration, without theatre</span><h2 className="mt-5 max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">Move the parts that matter. Test the rest.</h2><p className="mt-6 max-w-3xl leading-relaxed text-muted-foreground">{alternative.migration}</p>{relatedPosts.length > 0 && <div className="mt-7 flex flex-wrap gap-3">{relatedPosts.map((post) => <Button key={post.slug} variant="outline" asChild><Link href={`/blog/${post.slug}`}>Read: {post.title}<ArrowRight size={15} aria-hidden /></Link></Button>)}</div>}</div></section>

        <section className="container mt-24 md:mt-32"><div className="max-w-3xl"><span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">Questions buyers ask</span><h2 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">Before you switch</h2></div><div className="mt-12 divide-y divide-border border-y border-border">{alternative.faqs.map((faq) => <article key={faq.question} className="grid grid-cols-1 gap-5 py-7 md:grid-cols-12 md:gap-10"><h3 className="text-lg font-medium tracking-tight md:col-span-5">{faq.question}</h3><p className="leading-relaxed text-muted-foreground md:col-span-7">{faq.answer}</p></article>)}</div></section>

        <section className="container mt-24 md:mt-32"><div className="rounded-xl bg-primary px-6 py-14 text-primary-foreground md:px-12 md:py-20"><div className="max-w-3xl"><span className="font-mono text-xs uppercase tracking-[0.2em] text-primary-foreground/70">Your next step</span><h2 className="mt-5 text-4xl font-semibold tracking-tight text-balance md:text-5xl">Find out if a custom platform is actually the sensible move.</h2><p className="mt-5 max-w-2xl text-lg leading-relaxed text-primary-foreground/80">Bring the parts of your current setup that hurt. We will tell you what is worth rebuilding, what should stay, and where custom software would be a waste.</p><Button asChild size="lg" className="mt-8 bg-background text-foreground hover:bg-background/90"><Link href="https://cal.com/rizon.agency-cvbkll/30min" target="_blank" rel="noreferrer">Book a 30-minute call <ArrowRight size={16} aria-hidden /></Link></Button></div></div></section>

        <section className="container mt-20"><div className="flex flex-wrap gap-x-6 gap-y-3"><Link href="/lms-alternatives" className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">Browse all LMS alternatives <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" aria-hidden /></Link>{relatedService && <Link href={`/services/${relatedService.slug}`} className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">Explore {relatedService.title} <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" aria-hidden /></Link>}</div></section>
      </main>
      <Footer />
    </>
  );
}
