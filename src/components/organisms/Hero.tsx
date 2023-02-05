import React from "react";
import { HeroContent, HeroPicture, HeroStatus } from "@/components/molecules";

const Hero: React.FC = () => {
  return (
    <section className="flex flex-col-reverse items-center gap-y-6 lg:flex-row 2xl:justify-between">
      <HeroContent />
      <div className="md:min-h-[27rem] md:w-4/6 lg:w-fit lg:basis-2/5 2xl:basis-4/12">
        <HeroPicture />
        <HeroStatus />
      </div>
    </section>
  );
};

export default Hero;
