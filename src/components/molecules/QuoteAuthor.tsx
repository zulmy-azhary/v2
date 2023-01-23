import React from "react";
import { Box } from "@/components/atoms";

const QuoteAuthor: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Box className="w-fit self-end">
      <h4 className="text-sm md:text-lg before:content-['-'] before:mr-2 py-2 px-3 md:py-5 md:px-6">
        {children}
      </h4>
    </Box>
  );
};

export default QuoteAuthor;
