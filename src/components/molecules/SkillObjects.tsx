import React from "react";
import { Box, Dots } from "@/components/atoms";
import Image from "next/image";

const SkillObjects: React.FC = () => {
  return (
    <div className="basis-2/5 lg:basis-2/6 xl:basis-2/5 grid grid-cols-6 grid-rows-3 place-items-center gap-4">
      <Dots
        color="bg-gray"
        size={25}
        className="w-20 h-20 col-start-5 col-span-full row-start-1 row-span-2"
      />
      <Dots size={25} className="w-20 h-20 col-start-1 col-span-2 row-start-2 row-span-2" />
      <Box className="w-20 h-20 order-first col-start-1 row-start-1 col-span-3" />
      <Box className="w-20 h-20 order-last col-start-4 row-start-3 col-span-3 border-white" />
      <Image
        className="select-none w-20 lg:w-auto h-auto col-start-3 row-start-2 col-span-2 row-span-2 self-start"
        src={"/assets/brand-logo.svg"}
        width={254}
        height={254}
        alt="Brand Logo"
      />
    </div>
  );
};

export default SkillObjects;
