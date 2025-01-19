import GeneratePlanButton from "@/components/GeneratePlanButton";
import { Lightbulb } from "lucide-react";
import TravelHero from "@/components/home/TravelHero";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="container">
      <section
      className="py-[20px]
                w-full
                flex lg:flex-row lg:justify-between justify-center items-center
                gap-5 2xl:mb-[150px] xl:mb-[20px] lg:mb-10"
    >
      <article className="flex flex-col h-full md:py-10 justify-center items-center lg:flex-1 md:w-full ">

        <p className="text-xsm text-left text-[#6D5FFD] flex gap-3 w-full items-center mb-5">
          <Image src='explore-icon.svg' width={20} height={20} quality={100} alt="explore" priority />
        Explore the world!
        </p>

        <h1
          className="font-bold lg:text-7xl md:text-5xl text-4xl font-sans
      text-left w-full text-[#0E051F]"
        >
          Travel  <span className="text-[#6D5FFD]">Top <br className="xl:block hidden"/> Destination </span> <br className="lg:block hidden"/> of the World
        </h1>

        <div className="mt-2 lg:mt-5 rounded-md w-full text-left lg:text-lg md:text-md text-base">
            <p
              className="my-5 
                        lg:text-md md:text-base text-sm
                      text-muted-foreground
                        font-medium
                        tracking-wide
                        md:max-w-full 
                        text-left xl:pr-[50px]"
            >
              Our AI not only understands but crafts a personalized adventure. Discover local
              secrets, savor culinary delights, and explore iconic landmarks with an itinerary
              designed just for you.
            </p>
        </div>
        <div className="w-full ml-2 flex justify-start">
          <GeneratePlanButton />
        </div>
      </article>
      <figure className="lg:flex-1 flex-1 overflow-hidden ">
        <TravelHero />
      </figure>
    </section>
    </div>
  );
};

export default Banner;
