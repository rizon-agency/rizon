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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Rizon Agency",
  url: "https://rizon.agency",
  description:
    "Custom e-learning platform development for course creators, schools, and companies. No vendor lock-in, no monthly fees, 100% code ownership.",
  serviceType: "Custom Software Development",
  areaServed: "Worldwide",
  knowsAbout: [
    "Custom LMS Development",
    "E-Learning Platform Development",
    "Learning Management Systems",
    "Corporate Training Platforms",
    "School Portal Development",
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
