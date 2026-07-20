import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { Footer } from "../footer";
import { Eyebrow } from "@/components/eyebrow";
import { services } from "@/lib/services";

const BASE_URL = "https://rizon.agency";

export const metadata: Metadata = { title: "Custom Learning Platform Services | Rizon", description: "Custom LMS, corporate training, course platform, and school portal development for teams that need learning software built around their operation.", alternates: { canonical: `${BASE_URL}/services` }, openGraph: { title: "Custom Learning Platform Services | Rizon", description: "Four ways Rizon builds learning products around the work they need to do.", url: `${BASE_URL}/services`, siteName: "Rizon Agency", locale: "en_US", type: "website" }, twitter: { card: "summary_large_image", title: "Custom Learning Platform Services | Rizon", description: "Four ways Rizon builds learning products around the work they need to do.", creator: "@rizon_agency" } };

export default function ServicesPage() {
  const jsonLd = { "@context": "https://schema.org", "@type": "CollectionPage", name: "Rizon services", url: `${BASE_URL}/services`, mainEntity: { "@type": "ItemList", itemListElement: services.map((service, index) => ({ "@type": "ListItem", position: index + 1, name: service.title, url: `${BASE_URL}/services/${service.slug}` })) } };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="pb-24 md:pb-32">
        <section className="container pt-32 md:pt-40">
          <div className="max-w-4xl">
            <Eyebrow>Services</Eyebrow>
            <h1 className="mt-6 text-5xl font-semibold tracking-tight leading-[1.02] text-balance md:text-6xl">
              Learning platforms built for the work you need them to do.
            </h1>
            <p className="mt-7 max-w-3xl text-xl leading-relaxed text-muted-foreground">
              Some teams need a better LMS. Others need a product, a portal, or
              a training system that does not exist in a catalogue. Start with
              the job.
            </p>
          </div>
        </section>
        <section className="container mt-16 md:mt-20">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {services.map((service, index) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="surface surface-hover group flex flex-col p-8 md:p-9"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm font-medium text-primary">
                    0{index + 1}
                  </span>
                  <ArrowRight
                    size={22}
                    className="text-muted-foreground transition-transform group-hover:translate-x-1"
                    aria-hidden
                  />
                </div>
                <h2 className="mt-6 text-2xl font-semibold tracking-tight md:text-3xl">
                  {service.title}
                </h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  {service.heroSub}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
