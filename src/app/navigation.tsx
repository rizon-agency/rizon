"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { name: "Why us", href: "#why-us" },
  { name: "How we work", href: "#why-we-work" },
  { name: "Services", href: "#services" },
  { name: "Work", href: "#work" },
  { name: "FAQ", href: "#faq" },
];

export const Navigation = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link
          href="/"
          className="text-xl font-semibold tracking-tight"
          onClick={() => setOpen(false)}
        >
          rizon<span className="text-primary">.</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild>
            <Link href="#get-in-touch">Book a call</Link>
          </Button>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className="flex size-9 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-muted md:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`grid overflow-hidden border-t border-border transition-all duration-300 ease-out md:hidden ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr] border-t-transparent"
        }`}
      >
        <div className="overflow-hidden">
          <nav
            className="container mx-auto flex flex-col px-4 py-2"
            aria-label="Mobile"
          >
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-border py-3 text-[15px] text-muted-foreground transition-colors last:border-b-0 hover:text-foreground"
              >
                {link.name}
              </Link>
            ))}
            <Button asChild className="mt-4 mb-2 w-full">
              <Link href="#get-in-touch" onClick={() => setOpen(false)}>
                Book a call
              </Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};
