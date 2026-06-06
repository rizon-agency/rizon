import Link from "next/link";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section id="home" className="container mx-auto px-4 pt-32 md:pt-40">
      <div className="grid grid-cols-1 items-end gap-x-12 gap-y-10 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <span className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-primary">
            <span className="h-px w-8 bg-primary" aria-hidden />
            Custom LMS development
          </span>
          <h1 className="mt-6 text-5xl font-semibold tracking-tight leading-[1.02] text-balance sm:text-6xl md:text-7xl">
            Ready to launch your online learning platform?
          </h1>
        </div>

        <div className="lg:col-span-4">
          <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
            We build custom e-learning platforms from scratch-designed around
            how you teach, not how some template thinks you should. No monthly
            fees eating your revenue. No feature limits. Just a platform
            that&apos;s actually yours.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button size="lg" asChild>
              <Link href="https://cal.com/rizon.agency-cvbkll/30min" target="_blank" rel="noopener noreferrer">
                Get in touch
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#case-studies">
                See our work
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-16 border-t border-border md:mt-20">
        <dl className="grid grid-cols-2 lg:grid-cols-4">
          {[
            {
              value: (
                <>
                  <span className="text-primary">0</span>%
                </>
              ),
              label: "Platform fees — you keep every dollar you earn",
            },
            {
              value: (
                <>
                  <span className="text-primary">100</span>%
                </>
              ),
              label: "Code ownership — the platform is yours to keep",
            },
            {
              value: (
                <>
                  Day <span className="text-primary">1</span>
                </>
              ),
              label: "Your platform goes live and stays live",
            },
            {
              value: (
                <>
                  <span className="text-primary">4</span>+
                </>
              ),
              label: "Learning platforms shipped recently",
            },
          ].map((stat, i) => (
            <div
              key={i}
              className={`py-10 md:py-12 ${
                i > 0 ? "border-l border-border pl-6 md:pl-8" : "pr-6 md:pr-8"
              } ${i === 1 || i === 3 ? "pr-0" : ""}`}
            >
              <dt className="text-5xl font-light tracking-tight sm:text-6xl md:text-7xl">
                {stat.value}
              </dt>
              <dd className="mt-4 max-w-[18ch] text-[15px] leading-snug text-muted-foreground">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};
