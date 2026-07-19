import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  breadcrumbJsonLd,
  type Crumb,
} from "@/components/breadcrumb";
import { alternatives } from "@/lib/alternatives";
import { posts } from "@/lib/posts";
import { getServiceBySlug, services } from "@/lib/services";
import { Footer } from "../../footer";

const BASE_URL = "https://rizon.agency";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const service = getServiceBySlug((await params).slug);
  if (!service) return { title: "Service not found — Rizon" };
  const url = `${BASE_URL}/services/${service.slug}`;
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: service.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url,
      siteName: "Rizon Agency",
      locale: "en_US",
      type: "website",
      images: [
        {
          url: `${BASE_URL}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: service.h1,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: service.metaTitle,
      description: service.metaDescription,
      creator: "@rizon_agency",
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const service = getServiceBySlug((await params).slug);
  if (!service) notFound();
  const url = `${BASE_URL}/services/${service.slug}`;
  const crumbs: Crumb[] = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: service.title, href: `/services/${service.slug}` },
  ];
  const relatedAlternatives = alternatives.filter((item) =>
    service.relatedAlternativeSlugs?.includes(item.slug),
  );
  const relatedPosts = posts.filter((item) =>
    service.relatedPostSlugs?.includes(item.slug),
  );
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: service.title,
        serviceType: service.targetKeyword,
        description: service.metaDescription,
        url,
        provider: { "@id": `${BASE_URL}/#org` },
        areaServed: "Worldwide",
      },
      {
        "@type": "FAQPage",
        mainEntity: service.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
      breadcrumbJsonLd(crumbs),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <section className="container pt-24 md:pt-28">
          <Breadcrumb items={crumbs} />
          <div className="mt-10 max-w-4xl">
            <span className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-primary">
              <span className="h-px w-8 bg-primary" aria-hidden />
              Rizon services
            </span>
            <h1 className="mt-6 text-5xl font-semibold tracking-tight leading-[1.02] text-balance md:text-6xl">
              {service.h1}
            </h1>
            <p className="mt-7 max-w-3xl text-xl leading-relaxed text-muted-foreground text-pretty">
              {service.heroSub}
            </p>
            <Button asChild size="lg" className="mt-9">
              <Link
                href="https://cal.com/rizon.agency-cvbkll/30min"
                target="_blank"
                rel="noreferrer"
              >
                Discuss your platform <ArrowRight size={16} aria-hidden />
              </Link>
            </Button>
          </div>
        </section>
        <section className="container mt-24 md:mt-32">
          <div className="grid grid-cols-1 gap-12 border-t border-border pt-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
                The direct answer
              </span>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight">
                Who this is for
              </h2>
            </div>
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground lg:col-span-7 lg:col-start-6">
              <p>{service.intro}</p>
              <p className="border-l-2 border-primary pl-5 text-foreground">
                {service.forWho}
              </p>
            </div>
          </div>
        </section>
        <section className="container mt-24 md:mt-32">
          <div className="max-w-3xl">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
              The problem underneath
            </span>
            <h2 className="mt-5 text-4xl font-semibold tracking-tight text-balance md:text-5xl">
              The work your current platform leaves behind
            </h2>
            <p className="mt-7 text-lg leading-relaxed text-muted-foreground">
              {service.problem}
            </p>
          </div>
        </section>
        <section className="container mt-24 md:mt-32">
          <div className="grid grid-cols-1 gap-12 border-t border-border pt-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
                Before you build
              </span>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight">
                Find the costly exception
              </h2>
            </div>
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground lg:col-span-7 lg:col-start-6">
              {service.decisionGuide.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>
        <section className="container mt-24 md:mt-32">
          <div className="max-w-3xl">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
              What we build
            </span>
            <h2 className="mt-5 text-4xl font-semibold tracking-tight text-balance md:text-5xl">
              What {service.targetKeyword} looks like in practice
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 border-t border-border md:grid-cols-2">
            {service.whatWeBuild.map((section, index) => (
              <article
                key={section.heading}
                className="border-b border-border py-9 md:pr-10 md:odd:border-r md:odd:pr-12 md:even:pl-12"
              >
                <span className="font-mono text-sm text-primary">
                  0{index + 1}
                </span>
                <h3 className="mt-5 text-2xl font-medium tracking-tight">
                  {section.heading}
                </h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  {section.body}
                </p>
              </article>
            ))}
          </div>
        </section>
        <section className="container mt-24 md:mt-32">
          <div className="grid grid-cols-1 gap-12 border-t border-border pt-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
                How we make decisions
              </span>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight">
                Build the part that people use under pressure.
              </h2>
            </div>
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground lg:col-span-7 lg:col-start-6">
              <p>
                Most platform projects look tidy in a planning document. The
                real test comes later: a new member cannot log in ten minutes
                before a live session, a manager needs evidence for an audit, or
                an administrator has to reverse a mistaken enrolment while the
                learner is waiting on chat. We design and test those moments
                early. Happy-path screenshots are easy. Recovery paths tell you
                whether the product is ready.
              </p>
              <p>
                We use real acceptance tests: a learner loses access after a role
                change, an administrator corrects an import, a manager finds the
                right record without seeing private data, and a support request
                arrives after an unusual purchase. If a proposed feature does not
                improve one of those moments, it can wait. This keeps the build
                tied to the people who have to operate it after launch.
              </p>
              <p>
                We also keep a written decision log. If we choose an identity
                flow, a payment rule, or a source of truth for data, the reason
                sits beside the work. Six months later, when a new stakeholder
                asks why a screen behaves that way, your team has an answer that
                is more useful than a Slack search and somebody&apos;s memory.
              </p>
              <p>
                The first release stays intentionally narrow. It should solve a
                complete, important job for real people and leave room for
                evidence to change the next priority. A platform that launches
                with fewer features but a clean operating model is easier to
                extend than a bloated first version built around guesses. That
                restraint saves money. It also saves everyone from defending
                decisions nobody remembers making.
              </p>
            </div>
          </div>
        </section>
        <section className="container mt-24 md:mt-32">
          <div className="rounded-xl bg-muted px-6 py-10 md:px-10 md:py-14">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
              A practical boundary
            </span>
            <h2 className="mt-5 max-w-3xl text-3xl font-semibold tracking-tight md:text-4xl">
              A custom platform should earn its place.
            </h2>
            <p className="mt-6 max-w-3xl leading-relaxed text-muted-foreground">
              We will tell you if a configured LMS is the more sensible answer.
              Custom software earns its cost when the learner experience,
              operating model, or integration work is central to how you teach
              and sell. If the requirement is a standard catalogue with
              conventional enrolment and reporting, buying software is usually
              faster. The point is to remove recurring friction, not to turn a
              normal software choice into an engineering project.
            </p>
          </div>
        </section>
        <section className="container mt-24 md:mt-32">
          <div className="max-w-3xl">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
              How the build moves
            </span>
            <h2 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
              Working software every week
            </h2>
          </div>
          <div className="mt-12 divide-y divide-border border-y border-border">
            {service.process.map((item, index) => (
              <article
                key={item.step}
                className="grid grid-cols-1 gap-5 py-8 md:grid-cols-12 md:gap-10"
              >
                <span className="font-mono text-sm text-primary md:col-span-1">
                  0{index + 1}
                </span>
                <h3 className="text-xl font-medium tracking-tight md:col-span-4">
                  {item.step}
                </h3>
                <p className="leading-relaxed text-muted-foreground md:col-span-7">
                  {item.detail}
                </p>
              </article>
            ))}
          </div>
        </section>
        <section className="container mt-24 md:mt-32">
          <div className="grid grid-cols-1 gap-12 border-t border-border pt-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
                What is included
              </span>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight">
                The first release, clearly scoped
              </h2>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <ul className="space-y-4">
                {service.included.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-lg text-muted-foreground"
                  >
                    <Check
                      size={19}
                      className="mt-1 shrink-0 text-primary"
                      aria-hidden
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        <section className="container mt-24 md:mt-32">
          <div className="rounded-xl border border-border px-6 py-10 md:px-10 md:py-14">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
              Budget and tradeoffs
            </span>
            <h2 className="mt-5 max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
              What moves the price
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
              {service.costBand}
            </p>
            <p className="mt-5 max-w-3xl leading-relaxed text-muted-foreground">
              We scope in the open. You see the assumptions, what is excluded,
              and what would change the estimate. A fixed price without those
              details is only a delayed surprise.
            </p>
          </div>
        </section>
        <section className="container mt-24 md:mt-32">
          <div className="max-w-3xl">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
              After launch
            </span>
            <h2 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
              The platform should make the next decision easier.
            </h2>
            <p className="mt-7 text-lg leading-relaxed text-muted-foreground">
              {service.outcomes}
            </p>
          </div>
        </section>
        {(relatedAlternatives.length > 0 || relatedPosts.length > 0) && (
          <section className="container mt-24 md:mt-32">
            <div className="grid grid-cols-1 gap-12 border-t border-border pt-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
                  Useful next reading
                </span>
                <h2 className="mt-5 text-3xl font-semibold tracking-tight">
                  Make the comparison honestly
                </h2>
              </div>
              <div className="space-y-4 lg:col-span-7 lg:col-start-6">
                {relatedAlternatives.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/alternatives/${item.slug}`}
                    className="group flex items-center justify-between border-b border-border pb-4 text-lg font-medium"
                  >
                    <span>{item.competitor} alternative</span>
                    <ArrowRight
                      size={18}
                      className="transition-transform group-hover:translate-x-1"
                      aria-hidden
                    />
                  </Link>
                ))}
                {relatedPosts.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/blog/${item.slug}`}
                    className="group flex items-center justify-between border-b border-border pb-4 text-lg font-medium"
                  >
                    <span>{item.title}</span>
                    <ArrowRight
                      size={18}
                      className="transition-transform group-hover:translate-x-1"
                      aria-hidden
                    />
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
        <section className="container mt-24 md:mt-32">
          <div className="max-w-3xl">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
              Questions before a build
            </span>
            <h2 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
              The questions worth asking now
            </h2>
          </div>
          <div className="mt-12 divide-y divide-border border-y border-border">
            {service.faqs.map((faq) => (
              <article
                key={faq.question}
                className="grid grid-cols-1 gap-5 py-7 md:grid-cols-12 md:gap-10"
              >
                <h3 className="text-lg font-medium tracking-tight md:col-span-5">
                  {faq.question}
                </h3>
                <p className="leading-relaxed text-muted-foreground md:col-span-7">
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>
        </section>
        <section className="container mt-24 md:mt-32">
          <div className="rounded-xl bg-primary px-6 py-14 text-primary-foreground md:px-12 md:py-20">
            <h2 className="max-w-3xl text-4xl font-semibold tracking-tight text-balance md:text-5xl">
              Bring the awkward part of the current setup.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-primary-foreground/80">
              We will map the real constraint, tell you whether a custom build
              makes sense, and outline a first release that does not pretend to
              solve every future problem.
            </p>
            <Button
              asChild
              size="lg"
              className="mt-8 bg-background text-foreground hover:bg-background/90"
            >
              <Link
                href="https://cal.com/rizon.agency-cvbkll/30min"
                target="_blank"
                rel="noreferrer"
              >
                Book a 30-minute call <ArrowRight size={16} aria-hidden />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
