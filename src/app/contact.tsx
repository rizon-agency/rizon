"use client";

import { useState } from "react";
import Link from "next/link";
import { Calendar, Check, Copy, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/section-header";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";

const CAL_LINK = "https://cal.com/rizon.agency-cvbkll/30min";
const EMAIL = "choaib.m@rizon.agency";
const MAILTO = `mailto:${EMAIL}?subject=Question about a custom platform`;

export const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard unavailable (e.g. insecure context) — the mailto link still works.
    }
  };

  return (
    <section id="contact" className="container mx-auto px-4 mt-32 md:mt-40">
      <Reveal>
        <SectionHeader
          label="Get in touch"
          title={
            <>
              Let&apos;s talk about your{" "}
              <span className="text-primary italic">platform</span>
            </>
          }
          description="Ready to start, or just have a question? Pick whichever is easier. Book a call and we will dig into your project together, or send an email and we will get back to you."
        />
      </Reveal>

      <RevealGroup
        stagger={0.12}
        className="mt-16 grid grid-cols-1 border-t border-border md:grid-cols-2"
      >
        <RevealItem
          as="article"
          className="group relative border-b border-border py-10 md:border-b-0 md:border-r md:py-12 md:pr-12"
        >
          <span
            className="absolute left-0 -top-px h-px w-full origin-left scale-x-0 bg-primary transition-transform duration-500 ease-out group-hover:scale-x-100"
            aria-hidden
          />
          <div className="flex items-center justify-between">
            <span className="font-mono text-2xl font-normal tabular-nums leading-none text-muted-foreground/60 transition-colors duration-300 group-hover:text-primary">
              01
            </span>
            <Calendar
              size={22}
              strokeWidth={1.5}
              aria-hidden
              className="text-muted-foreground transition-colors duration-300 group-hover:text-foreground"
            />
          </div>
          <h3 className="mt-8 text-xl font-medium tracking-tight">
            Book a call
          </h3>
          <p className="mt-3 max-w-md text-[15px] leading-relaxed text-muted-foreground">
            30 minutes, no pressure. Tell us what you are building and we will
            tell you how we would approach it.
          </p>
          <div className="mt-7">
            <Button asChild>
              <Link href={CAL_LINK} target="_blank" rel="noopener noreferrer">
                Book a call
              </Link>
            </Button>
          </div>
        </RevealItem>

        <RevealItem
          as="article"
          className="group relative py-10 md:py-12 md:pl-12"
        >
          <span
            className="absolute left-0 -top-px h-px w-full origin-left scale-x-0 bg-primary transition-transform duration-500 ease-out group-hover:scale-x-100"
            aria-hidden
          />
          <div className="flex items-center justify-between">
            <span className="font-mono text-2xl font-normal tabular-nums leading-none text-muted-foreground/60 transition-colors duration-300 group-hover:text-primary">
              02
            </span>
            <Mail
              size={22}
              strokeWidth={1.5}
              aria-hidden
              className="text-muted-foreground transition-colors duration-300 group-hover:text-foreground"
            />
          </div>
          <h3 className="mt-8 text-xl font-medium tracking-tight">
            Send an email
          </h3>
          <p className="mt-3 max-w-md text-[15px] leading-relaxed text-muted-foreground">
            Prefer to write first? Send a question and we will reply.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Button asChild>
              <a href={MAILTO}>Email us</a>
            </Button>
            <div className="inline-flex items-center gap-2 rounded-full border border-border py-1 pl-3.5 pr-1">
              <span className="select-all font-mono text-sm text-muted-foreground">
                {EMAIL}
              </span>
              <button
                type="button"
                onClick={copyEmail}
                aria-label={copied ? "Email address copied" : "Copy email address"}
                className="flex size-7 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
              >
                {copied ? (
                  <Check size={15} strokeWidth={2} className="text-primary" aria-hidden />
                ) : (
                  <Copy size={15} strokeWidth={1.75} aria-hidden />
                )}
              </button>
            </div>
            <span className="sr-only" role="status" aria-live="polite">
              {copied ? "Email address copied to clipboard" : ""}
            </span>
          </div>
        </RevealItem>
      </RevealGroup>
    </section>
  );
};
