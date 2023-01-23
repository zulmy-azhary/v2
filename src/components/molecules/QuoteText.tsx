import React from "react";
import { Box } from "@/components/atoms";

const QuoteText: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Box>
      <h3 className="w-full md:text-xl py-6 px-3 md:py-10 md:px-9 relative before:absolute after:absolute before:content-['“'] after:content-['”'] before:inline-block after:inline-block before:bg-bgColor after:bg-bgColor before:text-gray after:text-gray before:left-3 md:before:left-10 after:right-3 md:after:right-10 before:-top-3 md:before:-top-4 after:-bottom-3 md:after:-bottom-4 before:p-1 after:p-1 before:h-6 md:before:h-8 after:h-6 md:after:h-8 before:text-3xl md:before:text-7xl after:text-3xl md:after:text-7xl">
        {children}
      </h3>
    </Box>
  );
};

export default QuoteText;
