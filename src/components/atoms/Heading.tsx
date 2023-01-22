import React from "react";

const Heading: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <h2 className="flex items-center text-3xl before:content-['#'] before:bg-gradient-to-br before:from-primary before:to-accent before:bg-clip-text before:text-transparent after:ml-4 after:h-[1px] after:w-full basis-2/4 after:bg-primary">
      {children}
    </h2>
  );
};

export default Heading;
