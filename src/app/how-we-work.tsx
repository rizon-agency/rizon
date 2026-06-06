import { ArrowRight } from "lucide-react";

type Step = {
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    title: "First call",
    description:
      "Tell us about your vision. What are you building? Who's it for? What's holding you back right now?",
  },
  {
    title: "Plan the next feature",
    description:
      "We decide together what to build next. What matters most to you, and what will make the biggest difference?",
  },
  {
    title: "Design it",
    description:
      "We design how it looks and how it works. You see exactly what it will be before we write a line of code.",
  },
  {
    title: "Build it",
    description:
      "We bring it to life. We handle the heavy lifting and make sure everything works the way it should.",
  },
  {
    title: "Demo it",
    description:
      "We give you a live version to play with. Test it, break it, tell us what feels right and what doesn't.",
  },
  {
    title: "Launch it",
    description: "We ship it to your platform. Your users get it.",
  },
];

export const HowWeWork = () => {
  return (
    <section id="why-we-work" className="container mx-auto px-4 mt-32 md:mt-40">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-6 items-end">
        <div className="lg:col-span-7">
          <span className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-primary">
            <span className="h-px w-8 bg-primary" aria-hidden />
            How we work
          </span>
          <h2 className="mt-5 text-4xl md:text-5xl font-semibold tracking-tight leading-[1.05] text-balance">
            No jargon. Just six steps.
          </h2>
        </div>
        <p className="lg:col-span-5 text-lg leading-relaxed text-muted-foreground text-pretty">
          No confusing process, no project-management theatre. Steps two
          through six repeat for every feature we ship — so you&apos;re never
          waiting on one big reveal.
        </p>
      </div>

      <ol className="mt-16 border-t border-border">
        {steps.map(({ title, description }, index) => (
          <li
            key={title}
            className="group relative grid grid-cols-1 gap-y-3 border-b border-border py-8 md:grid-cols-12 md:gap-x-12 md:py-10"
          >
            <span
              className="absolute left-0 -top-px h-px w-full origin-left scale-x-0 bg-primary transition-transform duration-500 ease-out group-hover:scale-x-100"
              aria-hidden
            />
            <span className="font-mono text-2xl font-normal tabular-nums leading-none text-muted-foreground/60 transition-colors duration-300 group-hover:text-primary md:col-span-2">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="flex items-center gap-2 text-xl font-medium tracking-tight md:col-span-4">
              {title}
              <ArrowRight
                size={18}
                strokeWidth={1.5}
                aria-hidden
                className="-translate-x-1 opacity-0 transition-all duration-300 ease-out text-muted-foreground group-hover:translate-x-0 group-hover:opacity-100"
              />
            </h3>
            <p className="max-w-xl text-[15px] leading-relaxed text-muted-foreground md:col-span-6">
              {description}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
};
