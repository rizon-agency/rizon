import Link from "next/link";
import { LogoWithText } from "@/components/logo";

const navLinks = [
  { name: "Home", href: "/#home" },
  { name: "Why Us", href: "/#why-us" },
  { name: "How We Work", href: "/#how-we-work" },
  { name: "Services", href: "/#services" },
  { name: "Get In Touch", href: "/#contact" },
];

const socials = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/rizon-agency/",
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  },
];

export const Footer = () => {
  return (
    <footer className="mt-32 border-t border-border md:mt-40">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-x-12 gap-y-12 py-16 lg:grid-cols-12 md:py-20">
          <div className="lg:col-span-6">
            <Link href="/" className="inline-block">
              <LogoWithText size={120} />
            </Link>
            <p className="mt-5 max-w-sm text-lg leading-relaxed text-muted-foreground text-pretty">
              Custom LMS development agency. Building learning platforms
              people actually want to use.
            </p>
          </div>

          <nav className="lg:col-span-3" aria-label="Footer">
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-foreground/50">
              Explore
            </h2>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[15px] text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-foreground/50">
              Follow
            </h2>
            <div className="mt-5 flex items-center gap-2">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden
                    className="size-4"
                  >
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-border py-6 sm:flex-row sm:items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Rizon. All rights reserved.
          </p>
          <Link
            href="/legal"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Terms &amp; Services
          </Link>
        </div>
      </div>
    </footer>
  );
};
