import { Box } from "@/components/atoms";
import React from "react";

const QuoteAuthor: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Box className="-mt-[1px] w-fit self-end py-3 px-4 lg:py-5 lg:px-6">
      <h3 className="text-sm before:mr-2 before:content-['-'] md:text-base xl:text-lg">{children}</h3>
    </Box>
  );
};

export default QuoteAuthor;
