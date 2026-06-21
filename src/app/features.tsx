"use client";

import {
  BarChart3,
  BookOpen,
  MonitorSmartphone,
  ShieldCheck,
  Sparkles,
  Trophy,
  type LucideIcon,
} from "lucide-react";
import { SectionHeader } from "@/components/section-header";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";

type Feature = {
  title: string;
  items: string[];
  icon: LucideIcon;
};

const features: Feature[] = [
  {
    title: "AI-Powered Features",
    icon: Sparkles,
    items: [
      "Auto-generate course content",
      "Create quizzes automatically",
      "Instant grading and feedback",
      "Smart content recommendations",
      "Personalized learning paths for each learner",
    ],
  },
  {
    title: "Engagement & Gamification",
    icon: Trophy,
    items: [
      "Badges and achievements",
      "Leaderboards",
      "Points and rewards",
      "Progress milestones",
      "Friendly competition",
    ],
  },
  {
    title: "Content & Delivery",
    icon: BookOpen,
    items: [
      "Video lectures and multimedia",
      "Quizzes and assessments",
      "Live classes (Zoom, Google Meet)",
      "Discussion forums",
      "Assignment submissions",
      "Completion certificates",
    ],
  },
  {
    title: "Tracking & Analytics",
    icon: BarChart3,
    items: [
      "Real-time progress tracking",
      "Detailed performance dashboards",
      "See who is engaged and who is stuck",
      "Custom reports",
      "Learning analytics",
    ],
  },
  {
    title: "Usability",
    icon: MonitorSmartphone,
    items: [
      "Works on any device",
      "Clear dashboards for learners and instructors",
      "Simple navigation",
      "Multiple languages",
      "Offline support on mobile",
    ],
  },
  {
    title: "Integrations & Security",
    icon: ShieldCheck,
    items: [
      "Payment processing (Stripe, PayPal, and more)",
      "Connect your tools (Zoom, email, CRM)",
      "Secure login and SSO options",
      "Encrypted data",
      "Cloud-based and always accessible",
    ],
  },
];

export const Features = () => {
  return (
    <section id="features" className="bg-primary text-primary-foreground mt-32 md:mt-40">
      <div className="container mx-auto px-4 py-20 md:py-28">
        <Reveal>
          <SectionHeader
            variant="primary"
            label="Features"
            title={
              <>
                What we can{" "}
                <span className="italic">build</span>
              </>
            }
            description="Everything you need to deliver learning experiences that work."
          />
        </Reveal>

        <RevealGroup stagger={0.1} className="mt-16 grid grid-cols-1 border-t border-l border-primary-foreground/20 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ title, items, icon: Icon }) => (
            <RevealItem
              key={title}
              as="article"
              className="group border-b border-r border-primary-foreground/20 p-8 transition-colors duration-300 hover:bg-primary-foreground/10"
            >
              <Icon
                size={24}
                strokeWidth={1.5}
                aria-hidden
                className="text-primary-foreground/60 transition-colors duration-300 group-hover:text-primary-foreground"
              />
              <h3 className="mt-6 text-xl font-medium tracking-tight">{title}</h3>
              <ul className="mt-5 space-y-2.5">
                {items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 text-[15px] text-primary-foreground/80"
                  >
                    <span
                      className="h-px w-3 shrink-0 bg-primary-foreground/30 transition-colors duration-300 group-hover:bg-primary-foreground/60"
                      aria-hidden
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
};
