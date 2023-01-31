import clsx from "clsx";
import React from "react";

interface Props extends React.HTMLAttributes<HTMLHeadingElement> {
  content?: string;
  hasLine?: boolean;
}

const Heading: React.FC<React.PropsWithChildren<Props>> = (props) => {
  const { content, hasLine, children, className, ...rest } = props;

  return (
    <h2
      className={clsx(
        "flex grow items-center text-xl font-medium before:bg-gradient-to-br before:from-primary before:to-accent before:bg-clip-text before:text-transparent lg:grow-0 lg:text-2xl xl:text-3xl",
        className ?? "lg:basis-2/4",
        content ?? "before:content-['#']",
        hasLine && "after:ml-2 after:h-[1px] after:w-full after:bg-primary xl:after:ml-4"
      )}
      {...rest}
    >
      {children}
    </h2>
  );
};

export default Heading;
