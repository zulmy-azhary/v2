import clsx from "clsx";
import React from "react";

interface Props extends React.HTMLAttributes<HTMLHeadingElement> {}

const Heading: React.FC<React.PropsWithChildren<Props>> = ({ children, className, ...rest }) => {
  return (
    <h2 className={clsx("flex items-center text-xl lg:text-2xl xl:text-3xl before:content-['#'] before:bg-gradient-to-br before:from-primary before:to-accent before:bg-clip-text before:text-transparent after:ml-2 xl:after:ml-4 after:h-[1px] after:w-full grow lg:grow-0 after:bg-primary", className ?? "lg:basis-2/4")} {...rest}>
      {children}
    </h2>
  );
};

export default Heading;
