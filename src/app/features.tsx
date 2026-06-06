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
      "Personalized learning paths for each student",
    ],
  },
  {
    title: "Make Learning Fun",
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
      "Live classes (Zoom, Google Meet integration)",
      "Discussion forums",
      "Assignment submissions",
      "Certificates when they finish",
    ],
  },
  {
    title: "Track Everything",
    icon: BarChart3,
    items: [
      "Real-time progress tracking",
      "Detailed performance dashboards",
      "See who's engaged, who's stuck",
      "Custom reports",
      "Learning analytics",
    ],
  },
  {
    title: "Easy to Use",
    icon: MonitorSmartphone,
    items: [
      "Works on any device",
      "Simple dashboards for students and instructors",
      "Easy navigation",
      "Multiple languages",
      "Works offline (for mobile apps)",
    ],
  },
  {
    title: "Integrations & Security",
    icon: ShieldCheck,
    items: [
      "Payment processing (Stripe, PayPal, etc.)",
      "Connect your tools (Zoom, email, CRM)",
      "Secure login options",
      "Your data is encrypted and safe",
      "Cloud-based (always accessible)",
    ],
  },
];

export const Features = () => {
  return (
    <section id="features" className="container mx-auto px-4 mt-32 md:mt-40">
      <SectionHeader
        label="Features"
        title={
          <>
            Features we{" "}
            <span className="text-primary italic">build</span>
          </>
        }
        description="Everything you need to create engaging and effective learning experiences."
      />

      <div className="mt-16 grid grid-cols-1 border-t border-l border-border sm:grid-cols-2 lg:grid-cols-3">
        {features.map(({ title, items, icon: Icon }) => (
          <article
            key={title}
            className="group border-b border-r border-border p-8 transition-colors duration-300 hover:bg-muted/40"
          >
            <Icon
              size={24}
              strokeWidth={1.5}
              aria-hidden
              className="text-muted-foreground transition-colors duration-300 group-hover:text-primary"
            />
            <h3 className="mt-6 text-xl font-medium tracking-tight">{title}</h3>
            <ul className="mt-5 space-y-2.5">
              {items.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2.5 text-[15px] text-muted-foreground"
                >
                  <span
                    className="h-px w-3 shrink-0 bg-border transition-colors duration-300 group-hover:bg-primary/60"
                    aria-hidden
                  />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};
