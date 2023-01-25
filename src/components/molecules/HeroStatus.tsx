import React from "react";
import { Box, Text, TextHighlight } from "@/components/atoms";

const HeroStatus: React.FC = () => {
  return (
    <div className="-translate-y-5 translate-x-3 ml-auto md:ml-0 md:translate-x-0 xl:-translate-x-6 w-fit md:w-full">
      <Box>
        <Text className="text-xs md:text-base lg:text-sm xl:text-base font-normal py-2 px-3 md:px-5 lg:px-3 xl:px-5 bg-bgColor relative z-10 before:content-['#'] before:bg-gradient-to-br before:from-primary before:to-accent before:bg-clip-text before:text-transparent flex gap-x-2 md:gap-x-3 lg:gap-x-2 xl:gap-x-3">
          Currently learning
          <TextHighlight className="from-springGreen to-pigmentBlue">Vue</TextHighlight>
          and
          <TextHighlight className="from-red-300 to-red-500">Svelte</TextHighlight>
        </Text>
      </Box>
      <Text className="text-xs md:text-sm font-normal py-1 text-gray bg-bgColor w-fit ml-auto">
        Makassar, Indonesia
      </Text>
    </div>
  );
};

export default HeroStatus;
