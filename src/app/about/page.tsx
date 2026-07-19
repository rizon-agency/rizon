import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "../footer";

const BASE_URL = "https://rizon.agency";

export const metadata: Metadata = {
  title: "About Rizon & Choaib Mouhrach",
  description:
    "How Rizon started: Choaib Mouhrach went from a barely-usable school system, to years inside a learning-development agency, to building custom learning platforms teams actually own.",
  alternates: { canonical: `${BASE_URL}/about` },
  openGraph: {
    title: "About Rizon & Choaib Mouhrach",
    description:
      "The engineer behind Rizon's custom learning platforms, and the road that got him here.",
    url: `${BASE_URL}/about`,
    siteName: "Rizon Agency",
    locale: "en_US",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Rizon & Choaib Mouhrach",
    description: "The engineer behind Rizon's custom learning platforms.",
    creator: "@rizon_agency",
  },
};

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        url: `${BASE_URL}/about`,
        name: "About Rizon",
        description:
          "The story behind Rizon and how Choaib Mouhrach builds custom learning platforms.",
      },
      {
        "@type": "Person",
        "@id": `${BASE_URL}/about#choaib`,
        name: "Choaib Mouhrach",
        jobTitle: "Founder & learning-platform engineer",
        description:
          "Founder of Rizon. Builds custom learning platforms for course businesses, schools, and training teams, with deep experience in LMS work, LTI, Moodle, and Canvas.",
        url: `${BASE_URL}/about`,
        image: `${BASE_URL}/choaib-mouhrach.svg`,
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
      <main>
        <section className="container pt-32 md:pt-40">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <span className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-primary">
                <span className="h-px w-8 bg-primary" aria-hidden />
                About Rizon
              </span>
              <h1 className="mt-6 text-5xl font-semibold tracking-tight leading-[1.02] text-balance md:text-6xl">
                I build the learning platform, so it stops being the thing your team works around.
              </h1>
              <p className="mt-7 max-w-2xl text-xl leading-relaxed text-muted-foreground">
                I&apos;m Choaib Mouhrach. I started Rizon to build learning
                platforms for course businesses, schools, and training teams
                whose software no longer matches how they actually teach.
              </p>
            </div>
            <div className="lg:col-span-4 lg:col-start-9">
              <Image
                src="/choaib-mouhrach.svg"
                alt="Choaib Mouhrach monogram"
                width={160}
                height={160}
                className="size-40 rounded-full"
              />
            </div>
          </div>
        </section>

        <section className="container mt-24 md:mt-32">
          <div className="grid grid-cols-1 gap-12 border-t border-border pt-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
                How Rizon started
              </span>
            </div>
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground lg:col-span-7 lg:col-start-6">
              <p>
                My first job out of university was at a public school. The
                learning system they&apos;d been handed looked fine in a demo and
                fell apart in daily use. Teachers kept a parallel spreadsheet
                because they trusted it more than the software. The tool that was
                supposed to save time had quietly become another thing to manage.
              </p>
              <p>
                Around then I joined a learning-development agency, and the LMS
                work pulled me in deeper than I expected. LTI, Moodle, Canvas,
                the standards that hold these systems together and the specific
                places they break. I spent a few years learning where learning
                software actually fails: not the headline feature, but the
                exception nobody planned for. The cohort that needs a different
                rule. The parent who needs a view. The completion record someone
                has to trust a year later.
              </p>
              <p>
                When I left, I couldn&apos;t unsee the pattern. It wasn&apos;t
                one bad product. Course creators, schools, and training teams
                were all fighting the same gap between how they teach and what
                their platform allows. So I started Rizon to close it, by
                building the platform around the teaching instead of the other
                way round. The Kaiser math platform is one of those builds:
                courses, quizzes, points, and an admin side, made for one team&apos;s
                way of teaching rather than bent out of a template.
              </p>
              <p>
                That work is less glamorous than a launch video. It&apos;s also
                where a platform either earns its keep or becomes the next thing
                people route around.
              </p>
            </div>
          </div>
        </section>

        <section className="container mt-24 md:mt-32">
          <div className="max-w-3xl">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
              The way I work
            </span>
            <h2 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
              Small releases. Direct conversations. Code you keep.
            </h2>
            <p className="mt-7 text-lg leading-relaxed text-muted-foreground">
              Projects move in weekly slices with live reviews, so you catch the
              awkward paths before they turn into expensive assumptions. At
              handover, the code and the deployment docs are yours. I&apos;ll
              stay on for support when it helps, but Rizon isn&apos;t built to
              trap anyone in a retainer, and I&apos;ll tell you when a problem is
              really a configuration fix, not a build.
            </p>
          </div>
        </section>

        <section className="container mt-24 md:mt-32">
          <div className="rounded-xl bg-primary px-6 py-14 text-primary-foreground md:px-12 md:py-20">
            <h2 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">
              Bring the part of the platform that&apos;s making the work harder.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-primary-foreground/80">
              We&apos;ll separate a solvable configuration problem from a product
              problem worth building, before you spend a cent on either.
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
                Talk through it <ArrowRight size={16} aria-hidden />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
