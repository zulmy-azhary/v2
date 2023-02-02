import Image from "next/image";
import React from "react";
import { Box, Dots } from "@/components/atoms";

const SkillObjects: React.FC = () => {
  return (
    <div className="grid basis-2/5 grid-cols-6 grid-rows-3 place-items-center gap-4 lg:basis-2/6 xl:basis-2/5">
      <Dots color="bg-gray" size={25} className="col-span-full col-start-5 row-span-2 row-start-1 h-20 w-20" />
      <Dots size={25} className="col-span-2 col-start-1 row-span-2 row-start-2 h-20 w-20" />
      <Box className="order-first col-span-3 col-start-1 row-start-1 h-20 w-20" />
      <Box className="order-last col-span-3 col-start-4 row-start-3 h-20 w-20 border-white" />
      <Image
        className="col-span-2 col-start-3 row-span-2 row-start-2 h-auto w-20 select-none self-start lg:w-auto"
        src={"/assets/brand-logo.svg"}
        width={254}
        height={254}
        alt="Brand Logo"
      />
    </div>
  );
};

export default SkillObjects;
