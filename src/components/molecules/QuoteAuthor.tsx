import React from "react";
import { Box } from "@/components/atoms";

const QuoteAuthor: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Box className="-mt-[1px] w-fit self-end py-3 px-4 md:py-5 md:px-6">
      <h3 className="text-sm before:mr-2 before:content-['-'] md:text-lg">{children}</h3>
    </Box>
  );
};

export default QuoteAuthor;
