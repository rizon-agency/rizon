import { Button } from "@/components/ui/button";
import { CalendarIcon, PhoneIcon } from "lucide-react";
import Link from "next/link";

export const Hero = () => {
  return (
    <div className="h-[90vh] px-4 pt-16 pb-0">
      <div className="h-full bg-primary rounded-lg flex items-center justify-center">
        <div className="text-center flex flex-col items-center">
          <h1 className="text-7xl text-primary-foreground font-semibold max-w-4xl">
            Ready to launch your online learning platform?
          </h1>

          <span className="text-primary-foreground max-w-4xl block mt-4">
            We build custom e-learning platforms from scratch-designed around
            how you teach, not how some template thinks you should. No monthly
            fees eating your revenue. No feature limits. Just a platform
            that&apos;s actually yours.
          </span>

          <div className="mt-8 flex items-center gap-4">
            <button className="bg-background py-2 px-5 rounded-full  text-primary">
              <Link href="/" className="flex items-center gap-2">
                <PhoneIcon size={16} />
                Get In Touch
              </Link>
            </button>
            <button className="border-2 text-background py-2 px-5 rounded-full ">
              <Link href="/">See Our Work</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
