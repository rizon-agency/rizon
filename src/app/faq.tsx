"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

type QA = {
  question: string;
  answer: string;
};

const faqs: QA[] = [
  {
    question: "How quickly can you build our platform?",
    answer:
      "It depends on scope, but you won't wait months to see something real. We ship a working version to production in the first sprint and add features week by week — so you're clicking through your platform in days, not waiting for one big reveal at the end.",
  },
  {
    question: "How involved will we be during development?",
    answer:
      "Very. Every week you'll see what's been built, test it live, and give feedback that shapes the next sprint. This isn't a 'disappear for months then surprise you' situation — you're part of the process from day one.",
  },
  {
    question: "Can you integrate with our existing tools?",
    answer:
      "Yes. We connect the tools you already rely on — payments like Stripe and PayPal, video via Zoom or Google Meet, plus email, CRM, and analytics. If it has an API, we can almost certainly wire it in.",
  },
  {
    question: "What happens after we launch?",
    answer:
      "We don't vanish. We stay on for fixes, improvements, and new features as your needs change. And because you own the code, you're free to bring in any developer later — you're never locked to us.",
  },
  {
    question: "Will the platform scale as we grow?",
    answer:
      "It's built to. We architect for growth from the start, so adding courses, users, and features later doesn't mean rebuilding. The platform grows with you instead of hitting a wall.",
  },
  {
    question: "Is the platform mobile-friendly?",
    answer:
      "Always. Everything we build works on any device out of the box — phones, tablets, and desktops — with clean dashboards for both students and instructors. Offline support is available for mobile apps.",
  },
  {
    question: "Who owns the code and platform?",
    answer:
      "You do — all of it. The code, the data, the platform. No monthly platform fees, no vendor lock-in, and no one taking a cut of your revenue. It's yours to run, change, or move whenever you want.",
  },
];

export const Faq = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="container mx-auto px-4 mt-32 md:mt-40">
      <div className="grid grid-cols-1 gap-x-16 gap-y-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-24">
            <span className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-primary">
              <span className="h-px w-8 bg-primary" aria-hidden />
              FAQ
            </span>
            <h2 className="mt-5 text-4xl md:text-5xl font-semibold tracking-tight leading-[1.05] text-balance">
              Questions, answered.
            </h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-muted-foreground text-pretty">
              Everything you need to know about working with us. Still curious?
              Just ask — we&apos;re happy to get specific.
            </p>
          </div>
        </div>

        <div className="lg:col-span-7">
          <dl className="border-t border-border">
            {faqs.map(({ question, answer }, index) => {
              const isOpen = index === open;
              return (
                <div key={question} className="border-b border-border">
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
                </div>
              );
            })}
          </dl>
        </div>
      </div>
    </section>
  );
};
