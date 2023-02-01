import React from "react";
import clsx from "clsx";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  border?: string;
  borderColor?: string;
}

const Square: React.FC<Props> = (props) => {
  const { border, borderColor, children, className, ...rest } = props;

  return (
    <div
      className={clsx(className ?? "h-full w-full", border ?? "border-[1px]", borderColor ?? "border-gray")}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Square;
