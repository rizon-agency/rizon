import { Contact } from "./contact";
import { Cta } from "./cta";
import { Faq } from "./faq";
import { Features } from "./features";
import { Footer } from "./footer";
import { Hero } from "./hero";
import { HowWeWork } from "./how-we-work";
import { Navigation } from "./navigation";
import { Services } from "./services";
import { WhyUs } from "./why-us";
import { Work } from "./work";

const Page = () => {
  return (
    <div>
      <Navigation />
      <Hero />
      <WhyUs />
      <HowWeWork />
      <Services />
      <Features />
      <Work />
      <Cta />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
};

export default Page;
