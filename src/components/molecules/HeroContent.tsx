import React from "react";
import { ButtonLink, Text, TextHighlight } from "@/components/atoms";

const HeroContent: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-y-5 md:items-start md:gap-y-8 lg:basis-2/5 xl:basis-1/2 xl:gap-y-10">
      <h1 className="text-4xl font-bold tracking-tight md:text-center md:text-5xl lg:text-start lg:text-4xl xl:text-6xl xl:leading-[1.1] 2xl:text-5xl">
        Building a bridge between <TextHighlight className="text-sky-400">design</TextHighlight> and{" "}
        <TextHighlight className="text-red-400">functionality</TextHighlight>, weaving elegance into{" "}
        <TextHighlight className="text-springGreen">code</TextHighlight>
      </h1>
      <Text className="w-full text-justify text-sm tracking-wide text-gray md:text-center md:text-lg lg:text-start xl:w-11/12 2xl:text-xl">
        Combining design aesthetics with intricate technical expertise and becomes the architectural blueprint for
        immersive, user-centered digital landscapes. From pixel to interaction, each line intricately weaves elegance
        into functionality, creating an unforgettable digital experience that goes beyond utility.
      </Text>
      <ButtonLink
        variant="primary"
        href="/assets/CV.pdf" //https://elegantcv.app/resume/8aa0d00c-44ea-4c1d-8277-75e6bf97dad9/summary
        target="_blank"
        className="self-end px-6 py-3 md:self-center lg:self-auto"
      >
        Download CV
      </ButtonLink>
    </div>
  );
};

export default HeroContent;
