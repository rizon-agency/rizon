import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, CalendarDays, MessagesSquare, KeyRound } from "lucide-react";
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

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3.5 py-1.5 text-sm font-medium text-primary">
      <span className="size-1.5 rounded-full bg-primary" aria-hidden />
      {children}
    </span>
  );
}

const beats = [
  {
    tag: "The public school",
    body: "My first job out of university was at a public school. Its learning system looked fine in a demo and fell apart in daily use, so teachers kept a parallel spreadsheet they trusted more than the software.",
  },
  {
    tag: "The agency",
    body: "Then I joined a learning-development agency and went deep on LMS work: LTI, Moodle, Canvas, and the specific places they break. Platforms fail at the exception nobody planned for, not the headline feature.",
  },
  {
    tag: "Rizon",
    body: "When I left, I couldn't unsee the pattern. Creators, schools, and training teams were all fighting the same gap between how they teach and what their platform allows. The Kaiser math platform was one of the first builds that closed it.",
  },
];

const principles = [
  {
    icon: CalendarDays,
    title: "Small releases",
    body: "Weekly slices with live reviews, so you catch the awkward paths before they turn into expensive assumptions.",
  },
  {
    icon: MessagesSquare,
    title: "Direct conversations",
    body: "You talk to the person building it. No account manager relaying a game of telephone back to the code.",
  },
  {
    icon: KeyRound,
    title: "Code you keep",
    body: "At handover the code and deployment docs are yours. Rizon isn't built to trap anyone in a retainer.",
  },
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
                I build the learning platform, so it stops being the thing your
                team <span className="mark">works around</span>.
              </h1>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">
                I&apos;m Choaib Mouhrach. I started Rizon to build learning
                platforms for course businesses, schools, and training teams
                whose software no longer matches how they actually teach.
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
                <figcaption className="flex items-baseline justify-between px-2.5 pt-3.5 pb-1.5">
                  <span className="font-medium">Choaib Mouhrach</span>
                  <span className="text-sm text-muted-foreground">
                    Founder, Rizon
                  </span>
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* Origin story — a real chronological sequence, on a warm tinted band */}
        <section className="mt-24 md:mt-32">
          <div className="bg-tint py-20 md:py-28">
            <div className="container">
              <div className="max-w-2xl">
                <Eyebrow>How Rizon started</Eyebrow>
                <h2 className="mt-6 text-4xl font-semibold tracking-tight text-balance md:text-5xl">
                  Three rooms, one problem that kept following me.
                </h2>
              </div>
              <ol className="mt-14 grid gap-6 md:grid-cols-3">
                {beats.map((beat, index) => (
                  <li
                    key={beat.tag}
                    className="surface surface-hover flex flex-col p-7 md:p-8"
                  >
                    <span className="font-mono text-sm font-medium text-primary">
                      0{index + 1}
                    </span>
                    <h3 className="mt-4 text-xl font-semibold tracking-tight">
                      {beat.tag}
                    </h3>
                    <p className="mt-3 leading-relaxed text-muted-foreground">
                      {beat.body}
                    </p>
                  </li>
                ))}
              </ol>
              <p className="mt-12 max-w-2xl text-lg leading-relaxed text-foreground/80">
                That work is less glamorous than a launch video. It&apos;s also
                where a platform either earns its keep or becomes the next thing
                people route around.
              </p>
            </div>
          </div>
        </section>

        {/* The way I work */}
        <section className="container mt-24 md:mt-32">
          <div className="max-w-2xl">
            <Eyebrow>The way I work</Eyebrow>
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

        {/* CTA */}
        <section className="container mt-24 md:mt-32">
          <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-16 text-primary-foreground md:px-14 md:py-20">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-16 -top-20 size-64 rounded-full bg-highlight/25 blur-3xl"
            />
            <div className="relative max-w-2xl">
              <h2 className="text-4xl font-semibold tracking-tight text-balance md:text-5xl">
                Bring the part of the platform that&apos;s making the work harder.
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-primary-foreground/80">
                We&apos;ll separate a solvable configuration problem from a
                product problem worth building, before you spend a cent on
                either.
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
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
