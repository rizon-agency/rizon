"use client";

import { useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { LogoWithText } from "@/components/logo";

const links = [
  { name: "Home", href: "/#home", id: "home", isPage: false },
  { name: "Why us", href: "/#why-us", id: "why-us", isPage: false },
  { name: "Process", href: "/#how-we-work", id: "how-we-work", isPage: false },
  { name: "Services", href: "/#services", id: "services", isPage: false },
  { name: "Work", href: "/#work", id: "work", isPage: false },
  { name: "Blog", href: "/blog", id: "blog", isPage: true },
];

export const MobileNav = () => {
  const pathname = usePathname();

  const isActive = (link: (typeof links)[0]) =>
    link.isPage ? pathname.startsWith(link.href) : pathname === "/";

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, link: (typeof links)[0]) => {
      if (!link.isPage && pathname === "/") {
        e.preventDefault();
        document.getElementById(link.id)?.scrollIntoView({ behavior: "smooth" });
        window.history.replaceState(null, "", `/#${link.id}`);
      }
    },
    [pathname],
  );

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          type="button"
          aria-label="Open menu"
          className="flex size-9 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 md:hidden"
        >
          <Menu size={18} />
        </button>
      </SheetTrigger>

      <SheetContent side="left" className="flex flex-col px-0">
        <SheetHeader className="border-b border-border px-6 pb-4">
          <SheetTitle asChild>
            <SheetClose asChild>
              <Link href="/#home" onClick={(e) => handleClick(e, links[0])}>
                <LogoWithText size={80} />
              </Link>
            </SheetClose>
          </SheetTitle>
        </SheetHeader>

        <nav className="flex flex-col px-6 py-4" aria-label="Mobile">
          {links.map((link) => {
            const active = isActive(link);
            return (
              <SheetClose key={link.id} asChild>
                <Link
                  href={link.href}
                  onClick={(e) => handleClick(e, link)}
                  aria-current={active ? "page" : undefined}
                  className="group flex items-center justify-between border-b border-border py-4 text-[15px] font-medium transition-colors last:border-b-0"
                >
                  <span className={active ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"}>
                    {link.name}
                  </span>
                  <span
                    aria-hidden
                    className={`h-1.5 w-1.5 rounded-full bg-primary transition-opacity ${active ? "opacity-100" : "opacity-0"}`}
                  />
                </Link>
              </SheetClose>
            );
          })}
        </nav>

        <div className="mt-auto border-t border-border px-6 pt-4 pb-6">
          <SheetClose asChild>
            <Button asChild className="w-full">
              <Link
                href="/#contact"
                onClick={(e) => handleClick(e, { name: "Contact", href: "/#contact", id: "contact", isPage: false })}
              >
                Book a call
              </Link>
            </Button>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
};
