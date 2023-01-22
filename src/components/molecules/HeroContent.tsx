import React from "react";
import { Button, TextHighlight } from "@/components/atoms";

const HeroContent: React.FC = () => {
  return (
    <div className="lg:basis-3/5 flex flex-col gap-y-5 md:gap-y-10 items-center md:items-start">
      <h1 className="text-2xl md:text-4xl leading-7 md:leading-10 font-medium tracking-tight">
        I am Zoel, a <TextHighlight>web designer</TextHighlight> and <TextHighlight>front end developer</TextHighlight>
      </h1>
      <h5 className="text-gray w-full md:w-11/12 tracking-wide text-sm md:text-base text-justify md:text-start">
        Design, building, and maintaining interactive and responsive websites especially for modern websites.
      </h5>
      <Button variant="primary" className="self-end md:self-auto">Download CV</Button>
    </div>
  )
}

export default HeroContent