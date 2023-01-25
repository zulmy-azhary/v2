import React from "react";
import clsx from "clsx";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  size: number;
  color?: string;
}

const Dots: React.FC<Props> = ({ size, color, className, ...rest }) => {
  return (
    <div className={clsx("grid grid-cols-5 place-items-center", className)} {...rest}>
      {Array.from(new Array(size)).map((_, idx) => (
        <span
          key={idx}
          className={clsx("w-1 h-1 rounded-full bg-fixed", color ?? "bg-gradient-to-br from-primary to-accent")}
        />
      ))}
    </div>
  );
};

export default Dots;
