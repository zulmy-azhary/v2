import React from "react";
import { Box } from "@/components/atoms";

const Hamburger: React.FC = () => {
  return (
    <div className="w-7 flex flex-col gap-y-2 cursor-pointer">
      <Box className="border-none h-[2px] w-full bg-gray" />
      <Box className="border-none h-[2px] w-full bg-gray" />
      <Box className="border-none h-[2px] w-full bg-gray" />
    </div>
  );
};

export default Hamburger;
