import Link from "next/link";
import { SectionHeader } from "@/components/section-header";

const testimonials = [
  { quote: "Thanks for your great quality work. The LMS system is exactly what I envisaged. Great working with you.", author: "Darren Bekker" },
  { quote: "Choaib and team are a great partner to work with. They are detail-oriented, knowledgeable, and dependable. They are always available to help and go above and beyond to make sure expectations are met.", author: "cloudSDS" },
  { quote: "Great experience with Choaib once again. 100% recommend.", author: "Nikki" },
  { quote: "Choaib is the type of freelancer you are looking for on this platform. Very professional and has all the required skills. You won't regret working with him.", author: "Nikki Anderson" },
  { quote: "Great to work with. Really knows LTI, Moodle, and Canvas inside out. He figured out issues we'd been stuck on and got everything working smoothly.", author: "Laura Keast" },
];

const clients = [
  { name: "AI Adoption", href: "https://aiadoption.co.za" },
  { name: "Choice Learning", href: "https://choicelearning.ca/" },
  { name: "Akera Agency", href: "https://akera.agency/" },
  { name: "Arkon Agency", href: "https://arkon.agency" },
];

export const Trust = () => <section className="container mt-32 md:mt-40"><SectionHeader label="Client feedback" title="The work has to hold up after the handoff." description="From clients who brought Rizon in when the learning-platform work got hard." /><div className="mt-12 grid grid-cols-1 border-t border-border md:grid-cols-2">{testimonials.map(({ quote, author }) => <blockquote key={quote} className="border-b border-border py-8 md:pr-10 md:odd:border-r md:odd:pr-12 md:even:pl-12"><p className="text-xl leading-relaxed tracking-tight">&ldquo;{quote}&rdquo;</p><footer className="mt-5 text-sm font-medium text-muted-foreground">{author}</footer></blockquote>)}</div><div className="mt-12 border-t border-border pt-8"><p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Selected client organisations</p><div className="mt-5 flex flex-wrap gap-x-7 gap-y-3">{clients.map((client) => <Link key={client.href} href={client.href} target="_blank" rel="noopener noreferrer" className="text-lg font-medium text-muted-foreground hover:text-foreground">{client.name}</Link>)}</div></div></section>;
