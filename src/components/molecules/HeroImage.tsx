import React from "react";
import { CustomImage, Dots, TextHighlight } from "@/components/atoms";
import Image from "next/image";

const HeroImage: React.FC = () => {
  return (
    <div className="lg:basis-2/5 md:min-h-[27rem] md:w-4/6 lg:w-fit">
      <div className="bg-gray/10 backdrop-blur-md h-72 md:h-96 lg:h-[20rem] xl:h-[25rem] flex justify-center items-center relative">
        <CustomImage
          className="absolute -z-10 -left-5 md:-left-10 -top-6 md:top-6 w-36 h-44 md:w-48 md:h-52"
          src={"/assets/brand-logo.svg"}
          alt="Logo Background"
        />
        <Image
          className="w-full self-end"
          width={480}
          height={480}
          priority
          src={"/assets/profile-pic.png"}
          alt="Profile Image"
        />
        <div className="absolute bottom-12 -right-4 md:-right-7 z-10">
          <Dots size={25} className="gap-3 md:gap-4" />
        </div>
      </div>
      <div className="-translate-y-5 translate-x-12 md:translate-x-0 xl:-translate-x-6 w-fit md:w-full">
        <p className="text-xs md:text-base font-normal py-2 px-3 md:px-5 border-[1px] border-gray bg-bgColor relative z-10 before:content-['#'] before:bg-gradient-to-br before:from-primary before:to-accent before:bg-clip-text before:text-transparent before:mr-2">
          Currently learning{" "}
          <TextHighlight className="from-springGreen to-pigmentBlue">Vue</TextHighlight> and{" "}
          <TextHighlight className="from-red-300 to-red-500">Svelte</TextHighlight>
        </p>
        <p className="text-xs md:text-sm font-normal py-1 text-gray bg-bgColor w-fit ml-auto">
          Makassar, Indonesia
        </p>
      </div>
    </div>
  );
};

export default HeroImage;
