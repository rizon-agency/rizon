"use client";

import { Cpu, MonitorPlay, Radio, Scissors, MessageSquare, type LucideIcon } from "lucide-react";
import { SectionHeader } from "@/components/section-header";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";

type Reason = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const reasons: Reason[] = [
  {
    title: "Best tech for your needs, not ours",
    description:
      "We pick the stack that fits your project and the people who will maintain it, not the one we happen to be fastest at. You never pay for our habits.",
    icon: Cpu,
  },
  {
    title: "Weekly live demos and updates",
    description:
      "Every week you get a working build to click through and a plain-English rundown of what changed. No month-long silences. No surprise invoices.",
    icon: MonitorPlay,
  },
  {
    title: "Live platform from day one",
    description:
      "Your platform ships to production with the first build. You watch it grow feature by feature instead of waiting for one big reveal at the end.",
    icon: Radio,
  },
  {
    title: "Build only what you will use",
    description:
      "We cut anything that does not earn its place. No bloated feature lists you will never open, just the things your users actually reach for.",
    icon: Scissors,
  },
  {
    title: "Your feedback shapes everything",
    description:
      "Your input drives every decision. We do not disappear for months. You are part of the process from day one.",
    icon: MessageSquare,
  },
];

export const WhyUs = () => {
  return (
    <section id="why-us" className="container mt-32 md:mt-40">
      <Reveal>
        <SectionHeader
          label="Why us"
          title={
            <>
              Why{" "}
              <span className="text-primary italic">work with us</span>
            </>
          }
          description="Most agencies optimize for their own convenience and bill you for it. Here is how we have decided to work instead, in writing."
        />
      </Reveal>

      <RevealGroup stagger={0.1} className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2">
        {reasons.map(({ title, description, icon: Icon }, index) => (
          <RevealItem
            key={title}
            as="article"
            className="surface surface-hover flex flex-col p-7 md:p-8"
          >
            <div className="flex items-center justify-between">
              <span className="inline-flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon size={20} strokeWidth={1.75} aria-hidden />
              </span>
              <span className="font-mono text-sm tabular-nums text-muted-foreground/50">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <h3 className="mt-6 text-xl font-semibold tracking-tight">{title}</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
              {description}
            </p>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
};
