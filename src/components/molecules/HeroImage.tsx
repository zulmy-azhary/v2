import React from "react";

const HeroImage: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <div className="md:min-h-[27rem] md:w-4/6 lg:w-fit lg:basis-2/5">{children}</div>;
};

export default HeroImage;
