import { cn } from "@/lib/utils";
import arrow from "@/public/arrow.png";
import Image from "next/image";
import { ReactNode } from "react";

const HowItWorks = () => {
  return (
    <section id="how-it-works" className=" w-full flex justify-center items-center px-5 py-[100px]">
      <div className="container">
        <div className="flex gap-20 xl:flex-row md:flex-col flex-col">
          <section className="flex flex-col xl:text-left text-center gap-5 xl:size-3/12 md:size:full">
            <h2 className="text-[#6D5FFD]  text-lg font-bold tracking-wide">
              How it works?
            </h2>
            <h3 className="text-foreground md:text-4xl text-xl font-bold ">
             Ideal Journey<br className="xl:block hidden" />  Swiftly
            </h3>
          </section>
          <section className="flex flex-wrap md:gap-[0px] gap-[50px] items-center xl:size-9/12 size-full justify-between h-full flex-col md:flex-row">
            <Item
              text="Login"
              description="Log in to start your journey."
              icon={<Image src='/login-icon.svg' width={100} height={100} quality={100} alt="Icon" priority />}
              className="transform rotate-[350deg] -scale-x-100 hidden md:block"
            />
            <Item
              text="Key in the travel idea"
              description="Tell us about your ideal trip"
              icon={<Image src='/travel-icon.svg' width={100} height={100} quality={100} alt="Icon" priority />}
              className="transform rotate-[350deg] -scale-x-100 hidden md:block"
            />

            <Item
              text="Get AI Plan"
              description="Get your AI-driven tailored travel plan"
              icon={<Image src='/plan-icon.svg' width={100} height={100} quality={100} alt="Icon" priority />}
              className="hidden"
            />
          </section>
        </div>
      </div>
    </section>
  );
};

const Item = ({
  text,
  icon,
  description,
  className,
}: {
  text: string;
  icon: ReactNode;
  description: string;
  className?: string;
}) => {
  return (
    <article className="flex flex-col items-center justify-center gap-5 relative">
      <div className="w-24 h-24 items-center flex justify-center">
        {icon}
      </div>
      <span className="font-bold tracking-wide text-xl mt-5">{text}</span>
      <span className="text-sm w-2/3 text-center text-muted-foreground">{description}</span>

      <Image
        src={arrow}
        width={80}
        height={100}
        alt="arrow"
        className={cn("absolute -right-[110px] top-[30%] opacity-40  sm:hidden", className)}
      />
    </article>
  );
};

export default HowItWorks;
