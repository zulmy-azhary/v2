import Image from "next/image";
import React from "react";
import { Dots } from "@/components/atoms";

const HeroPicture: React.FC = () => {
  return (
    <div className="bg-gray/10 backdrop-blur-md h-72 md:h-96 lg:h-[20rem] xl:h-[25rem] flex justify-center items-center relative">
      <Image
        className="select-none absolute -z-10 -left-4 md:-left-10 -top-6 md:top-6 w-36 h-44 md:w-48 md:h-52"
        width={250}
        height={250}
        src={"/assets/brand-logo.svg"}
        alt="Logo Background"
      />
      <Image
        className="select-none w-full self-end"
        width={480}
        height={480}
        priority
        src={"/assets/profile-pic.png"}
        alt="Profile Image"
      />
      <Dots size={25} className="absolute bottom-12 -right-4 md:-right-7 z-10 gap-3 md:gap-4" />
    </div>
  );
};

export default HeroPicture;
