"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { LogoWithText } from "@/components/logo";
import { MobileNav } from "./mobile-nav";

const links = [
  { name: "Home", href: "/#home", id: "home", isPage: false },
  { name: "Why us", href: "/#why-us", id: "why-us", isPage: false },
  { name: "Process", href: "/#how-we-work", id: "how-we-work", isPage: false },
  { name: "Services", href: "/#services", id: "services", isPage: false },
  { name: "Work", href: "/#work", id: "work", isPage: false },
  { name: "Blog", href: "/blog", id: "blog", isPage: true },
];

export const Navigation = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleAnchorClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
      if (pathname === "/") {
        e.preventDefault();
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        window.history.replaceState(null, "", `/#${id}`);
      }
    },
    [pathname],
  );

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between gap-8 px-4">
        <Link
          href="/#home"
          onClick={(e) => handleAnchorClick(e, "home")}
          className="shrink-0 text-xl font-semibold tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <LogoWithText size={70} />
        </Link>

        <nav className="hidden items-center md:flex" aria-label="Primary">
          {links.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              onClick={link.isPage ? undefined : (e) => handleAnchorClick(e, link.id)}
              className="px-4 py-2 text-[13px] font-medium tracking-tight text-muted-foreground transition-colors duration-200 hover:text-foreground focus-visible:outline-none focus-visible:text-foreground"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild size="sm">
            <Link href="/#contact" onClick={(e) => handleAnchorClick(e, "contact")}>
              Book a call
            </Link>
          </Button>
        </div>

        <MobileNav />
      </div>
    </header>
  );
};
