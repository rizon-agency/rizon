import {
  BarChart3,
  BookOpen,
  MonitorSmartphone,
  ShieldCheck,
  Sparkles,
  Trophy,
  type LucideIcon,
} from "lucide-react";

type Feature = {
  title: string;
  items: string[];
  icon: LucideIcon;
};

const features: Feature[] = [
  {
    title: "AI-Powered",
    icon: Sparkles,
    items: [
      "Auto-generated course content",
      "Automatic quiz creation",
      "Instant grading and feedback",
      "Smart content recommendations",
      "Personalized learning paths",
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
      "Live classes (Zoom, Meet)",
      "Discussion forums",
      "Completion certificates",
    ],
  },
  {
    title: "Track Everything",
    icon: BarChart3,
    items: [
      "Real-time progress tracking",
      "Performance dashboards",
      "See who's engaged or stuck",
      "Custom reports",
      "Learning analytics",
    ],
  },
  {
    title: "Easy to Use",
    icon: MonitorSmartphone,
    items: [
      "Works on any device",
      "Simple dashboards",
      "Easy navigation",
      "Multiple languages",
      "Offline support on mobile",
    ],
  },
  {
    title: "Integrations & Security",
    icon: ShieldCheck,
    items: [
      "Payments (Stripe, PayPal)",
      "Connect Zoom, email, CRM",
      "Secure login options",
      "Encrypted data",
      "Cloud-based access",
    ],
  },
];

export const Features = () => {
  return (
    <section id="features" className="container mx-auto px-4 mt-32 md:mt-40">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-6 items-end">
        <div className="lg:col-span-7">
          <span className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-primary">
            <span className="h-px w-8 bg-primary" aria-hidden />
            Features
          </span>
          <h2 className="mt-5 text-4xl md:text-5xl font-semibold tracking-tight leading-[1.05] text-balance">
            Everything a learning platform needs.
          </h2>
        </div>
        <p className="lg:col-span-5 text-lg leading-relaxed text-muted-foreground text-pretty">
          The building blocks for engaging, effective learning — mix and match
          what your platform actually calls for.
        </p>
      </div>

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
