"use client";

import { SectionHeader } from "@/components/section-header";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";

const stepLabels = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
];

type Step = {
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    title: "First call",
    description:
      "Tell us about your vision. What are you building? Who is it for? What is holding you back right now? We listen first.",
  },
  {
    title: "Plan the next feature",
    description:
      "We work with you to decide what to build next. What matters most? What will make the biggest difference for your learners?",
  },
  {
    title: "Design it",
    description:
      "We design how it looks and how it works. You see exactly what it will be before we write a single line of code.",
  },
  {
    title: "Build it",
    description:
      "We bring it to life. We handle the heavy lifting and make sure everything works the way it should.",
  },
  {
    title: "Demo it",
    description:
      "We give you a live version to play with. Test it, break it, tell us what feels right and what does not.",
  },
  {
    title: "Launch it",
    description:
      "We ship it to your platform. Your users get it.",
  },
];

export const HowWeWork = () => {
  return (
    <section id="how-we-work" className="container mt-32 md:mt-40">
      <Reveal>
        <SectionHeader
          label="How we work"
          title={
            <>
              How we actually{" "}
              <span className="text-primary italic">work with you</span>
            </>
          }
          description="No confusing process, no project-management jargon. Just straightforward."
        />
      </Reveal>

      <RevealGroup stagger={0.1} as="ol" className="mt-16 border-t border-border">
        {steps.map(({ title, description }, index) => (
          <RevealItem
            key={title}
            as="li"
            className="grid grid-cols-[auto_1fr] items-start gap-x-8 border-b border-border py-10 md:gap-x-14 md:py-14 lg:gap-x-20"
          >
            <span
              className="row-span-2 select-none font-light text-6xl tabular-nums leading-none tracking-tight text-muted-foreground/25 md:text-7xl lg:text-8xl"
              aria-hidden
            >
              {String(index + 1).padStart(2, "0")}
            </span>

            <div>
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
                Step {stepLabels[index]}
              </span>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl lg:text-4xl">
                {title}
              </h3>
              <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-muted-foreground md:text-base">
                {description}
              </p>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
};
