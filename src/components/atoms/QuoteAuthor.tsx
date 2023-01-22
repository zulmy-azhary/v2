import React from "react";

const QuoteAuthor: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <h5 className="w-fit text-sm md:text-lg self-end before:content-['-'] before:mr-2 py-2 px-3 md:py-5 md:px-6 border-[1px] border-gray">
      {children}
    </h5>
  );
};

export default QuoteAuthor;
