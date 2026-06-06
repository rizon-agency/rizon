import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Why Us",
    href: "/#why-us",
  },
  {
    name: "How we work",
    href: "/#why-we-work",
  },
  {
    name: "Services",
    href: "/#services",
  },
  {
    name: "Get in touch",
    href: "/#get-in-touch",
  },
];

export const Navigation = () => {
  return (
    <div className="rounded-full border flex items-center w-fit fixed top-2 left-1/2 -translate-x-1/2 shadow-md p-1 gap-2 bg-background">
      <Button size="sm" variant="outline" className="rounded-full">
        .r
      </Button>
      <Separator orientation="vertical" className="my-2" />
      <ul className="flex items-center">
        {links.map((link) => (
          <li key={link.name}>
            <Button variant="ghost" size="sm">
              <Link href={link.href}>{link.name}</Link>
            </Button>
          </li>
        ))}
      </ul>
      <Separator orientation="vertical" className="my-2" />
      <div>
        <Button>Book a call</Button>
      </div>
    </div>
  );
};
