import React from "react";
import { HeroContent, HeroImage, HeroPicture, HeroStatus } from "@/components/molecules";

const Hero: React.FC = () => {
  return (
    <section className="flex flex-col-reverse items-center gap-y-6 lg:flex-row">
      <HeroContent />
      <HeroImage>
        <HeroPicture />
        <HeroStatus />
      </HeroImage>
    </section>
  );
};

export default Hero;
