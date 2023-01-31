import React from "react";
import { Box, Text, TextHighlight } from "@/components/atoms";

const HeroStatus: React.FC = () => {
  return (
    <div className="ml-auto w-fit -translate-y-5 translate-x-3 md:ml-0 md:w-full md:translate-x-0 xl:-translate-x-6">
      <Box className="bg-bgColor py-2 px-3 md:px-5 lg:px-3 xl:px-5">
        <Text
          itemList
          fontWeight="font-normal"
          className="relative z-10 flex gap-x-2 text-xs md:gap-x-3 md:text-base lg:gap-x-2 lg:text-sm xl:gap-x-3 xl:text-base"
        >
          Currently learning
          <TextHighlight className="from-springGreen to-pigmentBlue">Vue</TextHighlight>
          and
          <TextHighlight className="from-red-300 to-red-500">Svelte</TextHighlight>
        </Text>
      </Box>
      <Text fontWeight="font-normal" className="ml-auto w-fit bg-bgColor py-1 text-xs text-gray md:text-sm">
        Makassar, Indonesia
      </Text>
    </div>
  );
};

export default HeroStatus;
