"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { SectionHeader } from "@/components/section-header";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";
import { faqs } from "@/lib/faq";

export const Faq = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="container mt-32 md:mt-40">
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
