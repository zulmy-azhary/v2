import React from "react";
import { ButtonLink, TextHighlight } from "@/components/atoms";

const HeroContent: React.FC = () => {
  return (
    <div className="lg:basis-3/5 flex flex-col gap-y-5 md:gap-y-8 xl:gap-y-10 items-center md:items-start">
      <h1 className="text-2xl lg:text-3xl xl:text-4xl leading-7 md:leading-10 font-medium tracking-tight md:text-center lg:text-start">
        I am Zoel, a <TextHighlight>web designer</TextHighlight> and <TextHighlight>front end developer</TextHighlight>
      </h1>
      <p className="text-gray w-full xl:w-11/12 tracking-wide text-sm md:text-base lg:text-lg text-justify md:text-center lg:text-start">
        Design, building, and maintaining interactive and responsive websites especially for modern websites.
      </p>
      <ButtonLink variant="primary" href="#" className="self-end md:self-center lg:self-auto">Download CV</ButtonLink>
    </div>
  )
}

export default HeroContent