"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { name: "Home", href: "/#home", id: "home" },
  { name: "Why us", href: "/#why-us", id: "why-us" },
  { name: "Process", href: "/#how-we-work", id: "how-we-work" },
  { name: "Services", href: "/#services", id: "services" },
  { name: "Work", href: "/#work", id: "work" },
];

const CAL_LINK = "https://cal.com/rizon.agency-cvbkll/30min";

export const Navigation = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState("home");
  const [hoverId, setHoverId] = useState<string | null>(null);

  const navRef = useRef<HTMLElement>(null);
  const itemRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const [line, setLine] = useState({ left: 0, width: 0, ready: false });

  // Add a hairline + faint surface once the user leaves the top.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy: light up the link for whichever section owns the viewport.
  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Slide the hairline under the hovered link, falling back to the active one.
  const targetId = hoverId ?? activeId;
  const measure = () => {
    const el = itemRefs.current[targetId];
    const nav = navRef.current;
    if (!el || !nav) {
      setLine((l) => ({ ...l, ready: false }));
      return;
    }
    const navBox = nav.getBoundingClientRect();
    const box = el.getBoundingClientRect();
    setLine({ left: box.left - navBox.left, width: box.width, ready: true });
  };

  useLayoutEffect(measure, [targetId]);
  useEffect(() => {
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetId]);

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
          onClick={() => setOpen(false)}
          className="shrink-0 text-xl font-semibold tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          rizon<span className="text-primary">.</span>
        </Link>

        <nav
          ref={navRef}
          className="relative hidden items-center md:flex"
          aria-label="Primary"
          onMouseLeave={() => setHoverId(null)}
        >
          {links.map((link) => {
            const isActive = activeId === link.id;
            return (
              <Link
                key={link.id}
                href={link.href}
                ref={(el) => {
                  itemRefs.current[link.id] = el;
                }}
                onMouseEnter={() => setHoverId(link.id)}
                aria-current={isActive ? "page" : undefined}
                className={`px-4 py-2 text-[13px] font-medium tracking-tight transition-colors duration-200 focus-visible:outline-none focus-visible:text-foreground ${
                  isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.name}
              </Link>
            );
          })}

          {/* Signature hairline — borrowed from the section dividers. */}
          <span
            aria-hidden
            className={`absolute -bottom-0.5 h-px bg-primary transition-all duration-300 ease-[cubic-bezier(0.65,0,0.35,1)] ${
              line.ready ? "opacity-100" : "opacity-0"
            }`}
            style={{ left: line.left + 16, width: Math.max(line.width - 32, 0) }}
          />
        </nav>

        <div className="hidden md:block">
          <Button asChild size="sm">
            <Link href={CAL_LINK} target="_blank" rel="noopener noreferrer">
              Book a call
            </Link>
          </Button>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className="flex size-9 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 md:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        id="mobile-menu"
        className={`grid overflow-hidden border-border transition-all duration-300 ease-out md:hidden ${
          open
            ? "grid-rows-[1fr] border-t bg-background/95 backdrop-blur-md"
            : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <nav className="container mx-auto flex flex-col px-4 py-2" aria-label="Mobile">
            {links.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                onClick={() => setOpen(false)}
                aria-current={activeId === link.id ? "page" : undefined}
                className="group flex items-center justify-between border-b border-border py-3.5 text-[15px] font-medium transition-colors last:border-b-0"
              >
                <span
                  className={
                    activeId === link.id
                      ? "text-foreground"
                      : "text-muted-foreground group-hover:text-foreground"
                  }
                >
                  {link.name}
                </span>
                <span
                  aria-hidden
                  className={`h-1.5 w-1.5 rounded-full bg-primary transition-opacity ${
                    activeId === link.id ? "opacity-100" : "opacity-0"
                  }`}
                />
              </Link>
            ))}
            <Button asChild className="mt-4 mb-2 w-full">
              <Link
                href={CAL_LINK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
              >
                Book a call
              </Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};
