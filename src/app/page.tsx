import { Hero } from "./hero";
import { Navigation } from "./navigation";

const Page = () => {
  return (
    <div>
      <Navigation />
      <Hero />
      <div className="h-[300vh]" />
    </div>
  );
};

export default Page;
