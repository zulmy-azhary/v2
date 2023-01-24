import React from "react";
import clsx from "clsx";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  borderColor?: string;
}

const Square: React.FC<Props> = ({ borderColor, children, className, ...rest }) => {
  return (
    <div className={clsx("border-[1px]", className ?? "w-full h-full", borderColor ?? "border-gray")} {...rest}>
      {children}
    </div>
  );
};

export default Square;