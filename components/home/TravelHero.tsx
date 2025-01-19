import Image from "next/image";
import React from "react";

const TravelHero = () => {
  return (
    
    <Image className="2xl:w-[1400px] xl:w-[1100px] lg:w-[1000px] lg:block hidden  absolute right-0 top-[100px]" src='/hero-img.svg' height={100} width={100} quality={100} alt="Banner Image" priority   />
    
  );
};

export default TravelHero;
