import React from "react";
import clsx from "clsx";

interface Props extends React.HTMLAttributes<HTMLParagraphElement> {
  itemList?: boolean;
  fontWeight?: string;
}

const Text: React.FC<React.PropsWithChildren<Props>> = (props) => {
  const { itemList, fontWeight, children, className, ...rest } = props;

  return (
    <p
      className={clsx(
        className,
        fontWeight ?? "font-light",
        itemList &&
          "before:mr-1 before:bg-gradient-to-br before:from-primary before:to-accent before:bg-clip-text before:text-transparent before:content-['#']"
      )}
      {...rest}
    >
      {children}
    </p>
  );
};

export default Text;
