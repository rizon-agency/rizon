"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const SERVICE_IMAGE =
  "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?w=800";

type Service = {
  name: string;
  title: string;
  description: string;
  features: string[];
  image: string;
};

const services: Service[] = [
  {
    name: "Custom E-Learning Platforms",
    title: "Custom E-Learning Platforms",
    description:
      "Your own online school — your brand, your rules, your revenue. Create courses, enroll students, track progress, and get paid, without handing a cut to Udemy or living inside someone else's limitations.",
    features: [
      "Built exactly how you need it",
      "Complete control over everything",
      "No monthly platform fees",
      "You own all of the code",
    ],
    image: SERVICE_IMAGE,
  },
  {
    name: "School & University Portals",
    title: "School & University Portals",
    description:
      "More than a cookie-cutter LMS. Learning platforms built around how your institution actually operates — class management, assignments, grading, student portals, and parent access.",
    features: [
      "Custom-built for how your school works",
      "Student and teacher dashboards",
      "Assignment submission and grading",
      "Parent and guardian access",
    ],
    image: SERVICE_IMAGE,
  },
  {
    name: "Corporate Training Platforms",
    title: "Corporate Training Platforms",
    description:
      "Train your team without the off-the-shelf limits. Internal platforms for onboarding, compliance, skill development, and certifications — everything your people need to learn, in one place.",
    features: [
      "Fully branded training portal",
      "Course creation and management",
      "Compliance reporting",
      "Certification management",
    ],
    image: SERVICE_IMAGE,
  },
  {
    name: "Platform Upgrades & Custom Features",
    title: "Platform Upgrades & Custom Features",
    description:
      "Already have a platform that isn't doing what you need? On Moodle, Canvas, or something custom, we add features, redesign the interface, speed things up, and integrate new tools without starting over.",
    features: [
      "New features built to your spec",
      "Better design and UX",
      "Performance improvements",
      "Integration with new tools",
    ],
    image: SERVICE_IMAGE,
  },
];

export const Services = () => {
  const [active, setActive] = useState(0);
  const current = services[active];

  return (
    <section id="services" className="container mx-auto px-4 mt-32 md:mt-40">
      <div className="grid grid-cols-1 gap-x-16 gap-y-12 lg:grid-cols-12">
        {/* Left — selector */}
        <div className="lg:col-span-5">
          <span className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-primary">
            <span className="h-px w-8 bg-primary" aria-hidden />
            Services
          </span>
          <h2 className="mt-5 text-4xl md:text-5xl font-semibold tracking-tight leading-[1.05] text-balance">
            Built exactly what you need.
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-muted-foreground text-pretty">
            No templates, no compromises. Pick what fits where you are — we shape
            the platform around the rest.
          </p>

          <ul className="mt-10 border-t border-border" role="tablist">
            {services.map((service, index) => {
              const isActive = index === active;
              return (
                <li key={service.name}>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActive(index)}
                    className="group flex w-full items-center justify-between gap-4 border-b border-border py-5 text-left transition-colors"
                  >
                    <span
                      className={`text-lg md:text-xl tracking-tight transition-colors ${
                        isActive
                          ? "font-medium text-foreground"
                          : "text-muted-foreground group-hover:text-foreground"
                      }`}
                    >
                      {service.name}
                    </span>
                    <ArrowUpRight
                      size={20}
                      strokeWidth={1.5}
                      aria-hidden
                      className={`shrink-0 transition-all duration-300 ${
                        isActive
                          ? "text-primary opacity-100"
                          : "-translate-x-1 text-muted-foreground opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                      }`}
                    />
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Right — detail panel */}
        <div className="lg:col-span-7">
          <div
            key={active}
            className="animate-in fade-in-0 duration-500 ease-out"
          >
            <div className="relative aspect-video overflow-hidden rounded-xl border border-border bg-muted">
              <Image
                src={current.image}
                alt={current.title}
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
                priority={active === 0}
              />
            </div>

            <h3 className="mt-8 text-2xl md:text-3xl font-medium tracking-tight text-balance">
              {current.title}
            </h3>
            <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
              {current.description}
            </p>

            <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {current.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2.5 text-[15px] text-muted-foreground"
                >
                  <Check
                    size={16}
                    strokeWidth={2}
                    aria-hidden
                    className="mt-0.5 shrink-0 text-primary"
                  />
                  {feature}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button size="lg" asChild>
                <Link href="#get-in-touch">Service details</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#get-in-touch">Book a call</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
