import { BlogPreview } from "./blog-preview";
import { Contact } from "./contact";
import { Cta } from "./cta";
import { Faq } from "./faq";
import { Features } from "./features";
import { Footer } from "./footer";
import { Hero } from "./hero";
import { HowWeWork } from "./how-we-work";
import { Services } from "./services";
import { WhyUs } from "./why-us";
import { Work } from "./work";
import { faqs } from "@/lib/faq";

const BASE_URL = "https://rizon.agency";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/#org`,
      name: "Rizon Agency",
      url: BASE_URL,
      logo: `${BASE_URL}/android-chrome-512x512.png`,
      email: "choaib.m@rizon.agency",
      sameAs: [
        "https://www.linkedin.com/in/choaib-mouhrach",
        "https://x.com/rizon_agency",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        email: "choaib.m@rizon.agency",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "Rizon Agency",
      publisher: { "@id": `${BASE_URL}/#org` },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${BASE_URL}/#service`,
      name: "Rizon Agency",
      url: BASE_URL,
      description:
        "Custom e-learning platform development for course creators, schools, and companies. No vendor lock-in, no monthly fees, 100% code ownership.",
      serviceType: "Custom Software Development",
      areaServed: "Worldwide",
      parentOrganization: { "@id": `${BASE_URL}/#org` },
      knowsAbout: [
        "Custom LMS Development",
        "E-Learning Platform Development",
        "Learning Management Systems",
        "Corporate Training Platforms",
        "School Portal Development",
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${BASE_URL}/#faq`,
      mainEntity: faqs.map(({ question, answer }) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: {
          "@type": "Answer",
          text: answer,
        },
      })),
    },
  ],
};

const Page = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div>
        <Hero />
        <WhyUs />
        <HowWeWork />
        <Services />
        <Features />
        <Work />
        <BlogPreview />
        <Cta />
        <Faq />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Page;
