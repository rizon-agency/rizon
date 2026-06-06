import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, PhoneIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?w=1600";

export const Hero = () => {
  return (
    <section className="container mx-auto px-4 pt-32 md:pt-40">
      <div className="grid grid-cols-1 items-end gap-x-12 gap-y-10 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <span className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-primary">
            <span className="h-px w-8 bg-primary" aria-hidden />
            Custom LMS development
          </span>
          <h1 className="mt-6 text-5xl font-semibold tracking-tight leading-[1.02] text-balance sm:text-6xl md:text-7xl">
            Online learning platforms that are{" "}
            <span className="text-primary">actually yours.</span>
          </h1>
        </div>

        <div className="lg:col-span-4">
          <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
            We build custom e-learning platforms from scratch — designed around
            how you teach, not how a template thinks you should. No monthly fees,
            no feature limits.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button size="lg" asChild>
              <Link href="#get-in-touch">
                <PhoneIcon />
                Get in touch
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#work">
                See our work
                <ArrowUpRight />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="relative mt-12 aspect-video overflow-hidden rounded-xl border border-border bg-muted md:mt-16 md:aspect-[21/9]">
        <Image
          src={HERO_IMAGE}
          alt="A learning platform built for the way you teach"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
    </section>
  );
};
