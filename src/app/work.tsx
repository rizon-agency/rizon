import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const PROJECT_THUMB =
  "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?w=800";

type Project = {
  name: string;
  stack: string[];
  description: string;
  thumbnail: string;
};

const projects: Project[] = [
  {
    name: "Kaiser Math Platform",
    stack: ["React", "TypeScript", "PostgreSQL", "Hono"],
    description:
      "Interactive math platform for elementary and middle-school students. Adaptive problem sets, animated step-by-step solutions, gamified progress, and real-time teacher dashboards.",
    thumbnail: PROJECT_THUMB,
  },
  {
    name: "Rizon LMS",
    stack: ["React", "TypeScript", "PostgreSQL", "Hono"],
    description:
      "Full-featured LMS for universities and training institutions. Multi-course support, a quiz builder with auto-grading, progress analytics, and multi-role dashboards.",
    thumbnail: PROJECT_THUMB,
  },
  {
    name: "Advanced Math Learning Platform",
    stack: ["Next.js", "TypeScript", "Tailwind", "Prisma", "PostgreSQL"],
    description:
      "Comprehensive LMS for advanced mathematics. Live webinars with chat and whiteboard, interactive coursework, homework submissions, student rankings, and real-time collaboration.",
    thumbnail: PROJECT_THUMB,
  },
  {
    name: "AI Literacy LXP",
    stack: ["React", "TypeScript", "PostgreSQL", "Hono", "Redis", "BullMQ"],
    description:
      "B2B training platform teaching AI fundamentals, prompt engineering, and practical tool adoption. Multi-tenant architecture, video lessons, analytics, and completion certificates.",
    thumbnail: PROJECT_THUMB,
  },
];

export const Work = () => {
  return (
    <section id="work" className="container mx-auto px-4 mt-32 md:mt-40">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-6 items-end">
        <div className="lg:col-span-7">
          <span className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-primary">
            <span className="h-px w-8 bg-primary" aria-hidden />
            Selected work
          </span>
          <h2 className="mt-5 text-4xl md:text-5xl font-semibold tracking-tight leading-[1.05] text-balance">
            What we&apos;ve been working on.
          </h2>
        </div>
        <p className="lg:col-span-5 text-lg leading-relaxed text-muted-foreground text-pretty">
          A few projects we&apos;ve finished recently. Nothing fancy — just stuff
          that works, shipped for real teams.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 border-t border-border md:grid-cols-2 md:gap-x-12">
        {projects.map(({ name, stack, description, thumbnail }, index) => (
          <article
            key={name}
            className="group relative border-b border-border py-10"
          >
            <span
              className="absolute left-0 -top-px h-px w-full origin-left scale-x-0 bg-primary transition-transform duration-500 ease-out group-hover:scale-x-100"
              aria-hidden
            />

            <div className="relative mb-8 aspect-video overflow-hidden rounded-lg border border-border bg-muted">
              <Image
                src={thumbnail}
                alt={name}
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
              {name}
            </h3>

            <ul className="mt-4 flex flex-wrap gap-2">
              {stack.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-border px-2.5 py-0.5 font-mono text-[11px] uppercase tracking-wider text-muted-foreground"
                >
                  {tech}
                </li>
              ))}
            </ul>

            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
              {description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};
