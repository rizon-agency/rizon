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

      <RevealGroup
        stagger={0.08}
        as="ol"
        className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {steps.map(({ title, description }, index) => (
          <RevealItem
            key={title}
            as="li"
            className="surface surface-hover flex flex-col p-7 md:p-8"
          >
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-lg font-medium tabular-nums text-primary">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground/60">
                Step {stepLabels[index]}
              </span>
            </div>
            <h3 className="mt-5 text-xl font-semibold tracking-tight md:text-2xl">
              {title}
            </h3>
            <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
              {description}
            </p>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
};
