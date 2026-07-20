import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  CalendarDays,
  MessagesSquare,
  KeyRound,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "../footer";

const BASE_URL = "https://rizon.agency";

export const metadata: Metadata = {
  title: "About Rizon & Choaib Mouhrach",
  description:
    "Rizon is a software studio focused exclusively on learning platforms — custom LMS products, Moodle and Canvas development, LTI integrations, and internal training portals.",
  alternates: { canonical: `${BASE_URL}/about` },
  openGraph: {
    title: "About Rizon & Choaib Mouhrach",
    description:
      "A software studio focused exclusively on learning platforms. Custom LMS, Moodle, Canvas, and LTI work led by Choaib Mouhrach.",
    url: `${BASE_URL}/about`,
    siteName: "Rizon Agency",
    locale: "en_US",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Rizon & Choaib Mouhrach",
    description: "A software studio focused exclusively on learning platforms.",
    creator: "@rizon_agency",
  },
};

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3.5 py-1.5 text-sm font-medium text-primary">
      <span className="size-1.5 rounded-full bg-primary" aria-hidden />
      {children}
    </span>
  );
}

const principles = [
  {
    icon: CalendarDays,
    title: "Small releases",
    body: "Every project is delivered in small milestones so feedback happens early, not after months of development.",
  },
  {
    icon: MessagesSquare,
    title: "Direct conversations",
    body: "You work directly with the engineer building your platform. No account managers, no communication chain, and no information lost between meetings and implementation.",
  },
  {
    icon: KeyRound,
    title: "Code you keep",
    body: "Every project includes full source code, documentation, and deployment instructions. You own the platform and can continue developing it with any team.",
  },
];

const proofPoints = [
  "Focused exclusively on learning platforms",
  "Moodle & Canvas specialists",
  "LTI integrations",
  "Custom LMS development",
  "End-to-end ownership",
  "Clients across multiple countries",
];

const capabilities = [
  "Custom LMS platforms",
  "Moodle development",
  "Canvas development",
  "LTI 1.3 integrations",
  "Student dashboards",
  "Instructor portals",
  "Assessment systems",
  "Certificates",
  "Learning analytics",
  "Gamification",
  "Course commerce",
  "Internal training portals",
];

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        url: `${BASE_URL}/about`,
        name: "About Rizon",
        description:
          "Rizon is a software studio focused exclusively on learning platforms, led by Choaib Mouhrach.",
      },
      {
        "@type": "Person",
        "@id": `${BASE_URL}/about#choaib`,
        name: "Choaib Mouhrach",
        jobTitle: "Founder & Learning Platform Engineer",
        description:
          "Founder of Rizon and a software engineer specializing in learning technology. Custom LMS, Moodle, Canvas, and LTI.",
        url: `${BASE_URL}/about`,
        image: `${BASE_URL}/choaib-mouhrach-pic.png`,
        knowsAbout: [
          "Learning Management Systems",
          "Custom LMS development",
          "LTI",
          "Moodle",
          "Canvas",
        ],
        worksFor: { "@id": `${BASE_URL}/#org` },
        sameAs: ["https://www.linkedin.com/in/choaib-mouhrach"],
      },
    ],
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="pb-24 md:pb-32">
        {/* Hero */}
        <section className="container pt-28 md:pt-36">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <Eyebrow>About Rizon</Eyebrow>
              <h1 className="mt-6 text-[2.7rem] font-semibold leading-[1.03] tracking-tight text-balance sm:text-6xl md:text-[4.1rem]">
                A software studio focused exclusively on{" "}
                <span className="mark">learning platforms</span>.
              </h1>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">
                I&apos;m Choaib Mouhrach, founder of Rizon and a software
                engineer specializing in learning technology. For the past
                several years I&apos;ve worked almost exclusively on LMS
                development, building custom learning platforms and integrating
                systems like Moodle, Canvas, and LTI for education businesses
                and training organizations.
              </p>
              <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">
                I started Rizon to give organizations an alternative to forcing
                their workflows into off-the-shelf platforms.
              </p>
              <div className="mt-8 flex flex-wrap gap-2.5">
                {["Custom LMS", "LTI", "Moodle", "Canvas", "Course platforms"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-card px-3.5 py-1.5 text-sm text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ),
                )}
              </div>
            </div>
            <div className="lg:col-span-5">
              <figure className="surface mx-auto max-w-sm overflow-hidden p-2.5 lg:ml-auto">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.15rem] bg-muted">
                  <Image
                    src="/choaib-mouhrach-pic.png"
                    alt="Choaib Mouhrach"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 400px"
                    className="object-cover"
                  />
                </div>
                <figcaption className="flex items-baseline justify-between gap-3 px-2.5 pt-3.5 pb-1.5">
                  <span className="font-medium">Choaib Mouhrach</span>
                  <span className="text-sm text-muted-foreground">
                    Founder &amp; Learning Platform Engineer
                  </span>
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* About Rizon */}
        <section className="mt-24 md:mt-32">
          <div className="bg-tint py-20 md:py-28">
            <div className="container">
              <div className="max-w-3xl">
                <Eyebrow>About Rizon</Eyebrow>
                <h2 className="mt-6 text-4xl font-semibold tracking-tight text-balance md:text-5xl">
                  Learning platforms built around how your organization already
                  operates.
                </h2>
                <p className="mt-8 text-lg leading-relaxed text-foreground/80">
                  Rizon is a software studio focused exclusively on learning
                  platforms. We design and build custom LMS products for
                  education businesses, training companies, schools, and
                  organizations whose current platform no longer fits how they
                  operate.
                </p>
                <p className="mt-5 text-lg leading-relaxed text-foreground/80">
                  That includes everything from complete learning platforms to
                  Moodle and Canvas development, LTI integrations, assessment
                  systems, reporting, course commerce, and internal training
                  portals.
                </p>
                <p className="mt-5 text-lg leading-relaxed text-foreground/80">
                  Every project starts with understanding how your organization
                  teaches and operates, then building software around that
                  instead of forcing your team to adapt to generic LMS software.
                </p>
              </div>

              <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {proofPoints.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 text-foreground/85"
                  >
                    <Check
                      size={19}
                      className="mt-1 shrink-0 text-primary"
                      aria-hidden
                    />
                    <span className="font-medium">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* How we build */}
        <section className="container mt-24 md:mt-32">
          <div className="max-w-2xl">
            <Eyebrow>How we build</Eyebrow>
            <h2 className="mt-6 text-4xl font-semibold tracking-tight text-balance md:text-5xl">
              Small releases. Direct conversations.{" "}
              <span className="mark">Code you keep.</span>
            </h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {principles.map((principle) => (
              <div key={principle.title} className="surface p-7 md:p-8">
                <span className="inline-flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <principle.icon size={20} strokeWidth={1.75} aria-hidden />
                </span>
                <h3 className="mt-6 text-xl font-semibold tracking-tight">
                  {principle.title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  {principle.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* What we've built */}
        <section className="container mt-24 md:mt-32">
          <div className="max-w-2xl">
            <Eyebrow>What we&apos;ve built</Eyebrow>
            <h2 className="mt-6 text-4xl font-semibold tracking-tight text-balance md:text-5xl">
              The specific work we do inside learning platforms.
            </h2>
          </div>
          <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item) => (
              <li
                key={item}
                className="surface flex items-center gap-3 p-5"
              >
                <Check
                  size={19}
                  className="shrink-0 text-primary"
                  aria-hidden
                />
                <span className="font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* CTA */}
        <section className="container mt-24 md:mt-32">
          <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-16 text-primary-foreground md:px-14 md:py-20">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-16 -top-20 size-64 rounded-full bg-highlight/25 blur-3xl"
            />
            <div className="relative max-w-2xl">
              <h2 className="text-4xl font-semibold tracking-tight text-balance md:text-5xl">
                Let&apos;s evaluate your platform.
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-primary-foreground/80">
                Whether you&apos;re extending Moodle, integrating Canvas,
                replacing an existing LMS, or building a learning platform from
                scratch, we&apos;ll help you determine whether the problem is
                configuration, integration, or custom software — and recommend
                the most practical path forward.
              </p>
              <Button
                size="lg"
                asChild
                className="mt-8 bg-background text-foreground hover:bg-background/90"
              >
                <Link
                  href="https://cal.com/rizon.agency-cvbkll/30min"
                  target="_blank"
                  rel="noreferrer"
                >
                  Book a discovery call <ArrowRight size={16} aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
