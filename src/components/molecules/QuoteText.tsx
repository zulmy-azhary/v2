import { Box } from "@/components/atoms";
import React from "react";

const QuoteText: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Box>
      <h2 className="relative w-full py-6 px-3 tracking-wide before:absolute before:left-3 before:-top-4 before:inline-block before:h-6 before:bg-bgColor before:p-1 before:text-5xl before:text-gray before:content-['“'] after:absolute after:right-3 after:-bottom-2 after:inline-block after:h-6 after:bg-bgColor after:p-1 after:text-5xl after:text-gray after:content-['”'] md:py-6 md:px-4 md:text-xl md:before:left-4 md:before:-top-5 md:before:h-7 md:before:text-6xl md:after:right-4 md:after:-bottom-2 md:after:h-7 md:after:text-6xl lg:py-10 lg:px-9 lg:text-2xl lg:before:left-10 lg:before:-top-6 lg:before:h-8 lg:before:text-7xl lg:after:right-10 lg:after:h-8 lg:after:text-7xl">
        {children}
      </h2>
    </Box>
  );
};

export default QuoteText;
