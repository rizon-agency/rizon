"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { SectionHeader } from "@/components/section-header";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";

type QA = {
  question: string;
  answer: string;
};

const faqs: QA[] = [
  {
    question: "How quickly can you build our platform?",
    answer:
      "It depends on scope, but here is how we approach timelines. We break everything into weekly sprints with live demos, so you see real progress every week instead of vague updates. Most platforms launch in phases: core features first (usually 8 to 12 weeks), then we iterate and add more based on what you learn from real users. You get a clear roadmap after our first conversation.",
  },
  {
    question: "How involved will we be during development?",
    answer:
      "Very. Every week you see what has been built, test it live, and give feedback that shapes the next sprint. This is not a disappear-for-months-then-surprise-you situation. You are part of the process from day one.",
  },
  {
    question: "Can you integrate with our existing tools?",
    answer:
      "Yes. Payment gateways, CRMs, email platforms, Zoom, Google Meet, SSO, whatever you currently use gets connected. We build around your workflow, not against it.",
  },
  {
    question: "What happens after we launch?",
    answer:
      "Launch is the beginning, not the end. We offer optional maintenance contracts for ongoing support, updates, new features, and optimizations. Most clients stay with us long-term because their platform keeps evolving with their needs.",
  },
  {
    question: "Will the platform scale as we grow?",
    answer:
      "That is the plan. We architect for growth from day one. Whether you are at 500 learners or 50,000, the infrastructure supports it, and we adjust as you scale.",
  },
  {
    question: "Is the platform mobile-friendly?",
    answer:
      "Completely. It works on desktop, tablet, and mobile, responsive by default rather than as an afterthought.",
  },
  {
    question: "Who owns the code and platform?",
    answer:
      "You do. Full ownership transfers to you on final payment: the code, the platform, the infrastructure. Maintenance is optional, never required.",
  },
];

export const Faq = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="container mx-auto px-4 mt-32 md:mt-40">
      <div className="grid grid-cols-1 gap-x-16 gap-y-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-24">
            <Reveal>
              <SectionHeader
                label="FAQ"
                title={
                  <>
                    Questions,{" "}
                    <span className="text-primary italic">answered</span>
                  </>
                }
                description="Everything you need to know about working with us. Still curious? Just ask, we are happy to get specific."
              />
            </Reveal>
          </div>
        </div>

        <div className="lg:col-span-7">
          <RevealGroup stagger={0.08} className="border-t border-border">
            {faqs.map(({ question, answer }, index) => {
              const isOpen = index === open;
              return (
                <RevealItem key={question} className="border-b border-border">
                  <dt>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${index}`}
                      id={`faq-trigger-${index}`}
                      onClick={() => setOpen(isOpen ? null : index)}
                      className="group flex w-full items-start justify-between gap-6 py-6 text-left"
                    >
                      <span
                        className={`text-lg md:text-xl tracking-tight transition-colors ${
                          isOpen
                            ? "text-foreground"
                            : "text-foreground/80 group-hover:text-foreground"
                        }`}
                      >
                        {question}
                      </span>
                      <Plus
                        size={22}
                        strokeWidth={1.5}
                        aria-hidden
                        className={`mt-0.5 shrink-0 text-muted-foreground transition-all duration-300 ease-out group-hover:text-foreground ${
                          isOpen ? "rotate-45 text-primary" : "rotate-0"
                        }`}
                      />
                    </button>
                  </dt>
                  <dd
                    id={`faq-panel-${index}`}
                    role="region"
                    aria-labelledby={`faq-trigger-${index}`}
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-xl pb-6 text-[15px] leading-relaxed text-muted-foreground">
                        {answer}
                      </p>
                    </div>
                  </dd>
                </RevealItem>
              );
            })}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
};
