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

const sectionLinks = links.filter((l) => !l.isPage);

export const Navigation = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  // Seed from URL hash so the correct section is active immediately on refresh.
  const [activeId, setActiveId] = useState(() => {
    if (typeof window === "undefined") return "home";
    const hash = window.location.hash.replace("#", "");
    return sectionLinks.some((l) => l.id === hash) ? hash : "home";
  });

  // Single scroll listener: frosted header + scroll-spy in one pass.
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);

      // Only run scroll-spy on the home page where sections live.
      if (pathname !== "/") return;

      const mid = window.scrollY + window.innerHeight * 0.4;
      const current = sectionLinks
        .map((l) => ({ id: l.id, el: document.getElementById(l.id) }))
        .filter((s): s is { id: string; el: HTMLElement } => s.el !== null)
        .filter((s) => s.el.offsetTop <= mid)
        .pop();

      if (current) setActiveId(current.id);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  const handleAnchorClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
      if (pathname === "/") {
        e.preventDefault();
        setActiveId(id);
        document.getElementById(id)?.scrollIntoView({ behavior: "instant" });
        window.history.replaceState(null, "", `/#${id}`);
      }
    },
    [pathname],
  );

  // Blog uses pathname; section links use scroll-spy (only meaningful on "/").
  const isActive = (link: (typeof links)[0]) =>
    link.isPage
      ? pathname.startsWith(link.href)
      : pathname === "/" && activeId === link.id;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between gap-8">
        <Link
          href="/#home"
          onClick={(e) => handleAnchorClick(e, "home")}
          className="shrink-0 text-xl font-semibold tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <LogoWithText size={70} className="text-primary" />
        </Link>

        <nav className="hidden items-center md:flex" aria-label="Primary">
          {links.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              onClick={link.isPage ? undefined : (e) => handleAnchorClick(e, link.id)}
              aria-current={isActive(link) ? "page" : undefined}
              className={`px-4 py-2 text-[13px] font-medium tracking-tight transition-colors duration-200 focus-visible:outline-none focus-visible:text-foreground ${
                isActive(link)
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
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

        <MobileNav activeId={activeId} />
      </div>
    </header>
  );
};
