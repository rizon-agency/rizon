import { Cpu, MonitorPlay, Radio, Scissors, type LucideIcon } from "lucide-react";

type Reason = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const reasons: Reason[] = [
  {
    title: "Best tech for your needs, not ours",
    description:
      "We pick the stack that fits your project and the people who'll maintain it — not the one we happen to be fastest at. You're never paying for our habits.",
    icon: Cpu,
  },
  {
    title: "Weekly live demos and updates",
    description:
      "Every week you get a working build to click through and a plain-English rundown of what changed. No month-long silences, no surprise invoices.",
    icon: MonitorPlay,
  },
  {
    title: "Live platform from day one",
    description:
      "Your platform ships to production with the first build. You watch it grow feature by feature instead of waiting for one big reveal at the end.",
    icon: Radio,
  },
  {
    title: "Build only what you'll use",
    description:
      "We cut anything that doesn't earn its place. No bloated feature lists you'll never open — just the things your users actually reach for.",
    icon: Scissors,
  },
];

export const WhyUs = () => {
  return (
    <section id="why-us" className="container mx-auto px-4 mt-32 md:mt-40">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-6 items-end">
        <div className="lg:col-span-7">
          <span className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-primary">
            <span className="h-px w-8 bg-primary" aria-hidden />
            Why us
          </span>
          <h2 className="mt-5 text-4xl md:text-5xl font-semibold tracking-tight leading-[1.05] text-balance">
            Four commitments we don&apos;t break.
          </h2>
        </div>
        <p className="lg:col-span-5 text-lg leading-relaxed text-muted-foreground text-pretty">
          Most agencies optimize for their own convenience and bill you for it.
          Here&apos;s how we&apos;ve decided to work instead — in writing.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 border-t border-border">
        {reasons.map(({ title, description, icon: Icon }, index) => (
          <article
            key={title}
            className="group relative border-b border-border md:odd:border-r py-10 md:py-12 md:even:pl-12 md:odd:pr-12"
          >
            <span
              className="absolute left-0 -top-px h-px w-full origin-left scale-x-0 bg-primary transition-transform duration-500 ease-out group-hover:scale-x-100"
              aria-hidden
            />
            <div className="flex items-center justify-between">
              <span className="font-mono text-2xl font-normal tabular-nums leading-none text-muted-foreground/60 transition-colors duration-300 group-hover:text-primary">
                {String(index + 1).padStart(2, "0")}
              </span>
              <Icon
                size={22}
                strokeWidth={1.5}
                className="text-muted-foreground transition-colors duration-300 group-hover:text-foreground"
                aria-hidden
              />
            </div>
            <h3 className="mt-8 text-xl font-medium tracking-tight">{title}</h3>
            <p className="mt-3 max-w-md text-[15px] leading-relaxed text-muted-foreground">
              {description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};
