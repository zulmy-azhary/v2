import { Dots } from "@/components/atoms";
import Image from "next/image";
import React from "react";

const HeroPicture: React.FC = () => {
  return (
    <div className="relative flex h-72 items-center justify-center bg-card md:h-96 lg:h-[20rem] xl:h-[25rem]">
      <Image
        className="absolute -left-4 -top-6 h-44 w-36 select-none md:-left-10 md:top-6 md:h-52 md:w-48"
        width={32}
        height={32}
        priority
        src={"/assets/brand-logo.svg"}
        alt="Logo Background"
      />
      <Image
        className="z-0 w-full select-none self-end"
        width={512}
        height={512}
        priority
        src={"/assets/profile-pic.png"}
        alt="Profile Image"
      />
      <Dots
        size={25}
        className="absolute bottom-12 -right-4 gap-3 md:-right-10 md:gap-4 lg:-right-8 xl:-right-12"
        color="bg-yellow-400"
      />
    </div>
  );
};

export default HeroPicture;
