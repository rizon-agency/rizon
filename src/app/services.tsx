"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/section-header";
import { Reveal } from "@/components/reveal";

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
      "The platform your learning product runs on: your brand, your rules, your revenue. Create and structure content, enroll and manage learners, track progress, handle payments, all without handing a cut to a third party or living inside someone else's limits.",
    features: [
      "A platform built exactly how you need it",
      "Complete control over the product and the data",
      "No monthly platform fees",
      "You own all the code",
      "It grows as you grow",
    ],
    image: "/services/custom-e-learning-platforms.png",
  },
  {
    name: "School & University Portals",
    title: "School & University Portals",
    description:
      "Your institution needs more than a cookie-cutter LMS. You need something that works the way your school actually operates. We build learning platforms for schools and universities-class management, assignments, grading, student portals, parent access, whatever your institution needs.",
    features: [
      "Custom-built for how your school works",
      "Student and teacher dashboards",
      "Assignment submission and grading",
      "Progress tracking and reporting",
      "Parent/guardian access portals",
    ],
    image: "/services/school-university-portals.png",
  },
  {
    name: "Corporate Training Platforms",
    title: "Corporate Training Platforms",
    description:
      "Train your team without the limitations of off-the-shelf training software. We build internal training platforms for companies-onboarding programs, compliance training, skill development, certifications. Everything your team needs to learn, all in one place.",
    features: [
      "Branded training portal",
      "Course creation and management",
      "Progress tracking and compliance reporting",
      "Certification and credential management",
      "Integration with your existing tools",
    ],
    image: "/services/corporate-training-platforms.png",
  },
  {
    name: "Platform Upgrades & Custom Features",
    title: "Platform Upgrades & Custom Features",
    description:
      "Already have a platform but it's not doing what you need? We can fix that. Whether you're using Moodle, Canvas, or something custom, we can add features, redesign the interface, speed things up, or integrate new tools.",
    features: [
      "New features built to your specs",
      "Better design and user experience",
      "Performance improvements",
      "Integration with new tools",
      "Bug fixes and optimization",
    ],
    image: "/services/platform-upgrades-custom-features.png",
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
          <Reveal>
            <SectionHeader
              label="Services"
              title={
                <>
                  What we{" "}
                  <span className="text-primary italic">build</span>
                </>
              }
              description="We build exactly what you need. No templates. No compromises."
            />
          </Reveal>

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
                <Link href="/#contact">
                  Book a call
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
