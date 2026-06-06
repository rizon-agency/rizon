import Link from "next/link";
import { ArrowUpRight, PhoneIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Cta = () => {
  return (
    <section id="get-in-touch" className="container mx-auto px-4 mt-32 md:mt-40">
      <div className="rounded-lg bg-primary px-6 py-16 text-primary-foreground sm:px-10 md:px-16 md:py-24">
        <div className="grid grid-cols-1 items-end gap-x-12 gap-y-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <span className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-primary-foreground/70">
              <span className="h-px w-8 bg-primary-foreground/40" aria-hidden />
              Get started
            </span>
            <h2 className="mt-6 text-4xl font-semibold tracking-tight leading-[1.03] text-balance sm:text-5xl md:text-6xl">
              Ready to build your platform?
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-lg leading-relaxed text-primary-foreground/80 text-pretty">
              If you&apos;re ready to deliver exceptional learning experiences on
              a platform built around your specific needs, you&apos;re in the
              right place. We build e-learning platforms with the flexibility and
              control to grow without limitations.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button
                size="lg"
                asChild
                className="bg-background text-foreground hover:bg-background/90"
              >
                <Link href="#get-in-touch">
                  <PhoneIcon />
                  Get in touch
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <Link href="#work">
                  See our work
                  <ArrowUpRight />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
