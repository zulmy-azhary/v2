import { Box } from "@/components/atoms";
import React from "react";

const QuoteText: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Box>
      <h2 className="relative w-full py-6 px-3 before:absolute before:left-3 before:-top-3 before:inline-block before:h-6 before:bg-bgColor before:p-1 before:text-3xl before:text-gray before:content-['“'] after:absolute after:right-3 after:-bottom-3 after:inline-block after:h-6 after:bg-bgColor after:p-1 after:text-3xl after:text-gray after:content-['”'] md:py-6 md:px-4 md:text-lg md:before:left-4 md:before:-top-4 md:before:h-7 md:before:text-5xl md:after:right-4 md:after:-bottom-4 md:after:h-7 md:after:text-5xl lg:py-10 lg:px-9 lg:text-xl lg:before:left-10 lg:before:h-8 lg:before:text-7xl lg:after:right-10 lg:after:h-8 lg:after:text-7xl">
        {children}
      </h2>
    </Box>
  );
};

export default QuoteText;
