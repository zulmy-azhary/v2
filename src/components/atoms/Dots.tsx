import React from "react";
import clsx from "clsx";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  size: number;
  color?: string;
}

const Dots: React.FC<Props> = (props) => {
  const { size, color, className, ...rest } = props;

  return (
    <div className={clsx("grid grid-cols-5 place-items-center", className)} {...rest}>
      {Array.from(new Array(size)).map((_, idx) => (
        <span
          key={idx}
          className={clsx("h-1 w-1 rounded-full bg-fixed", color ?? "bg-gradient-to-br from-primary to-accent")}
        />
      ))}
    </div>
  );
};

export default Dots;
