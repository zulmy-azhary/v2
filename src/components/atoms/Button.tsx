import clsx from "clsx";
import React from "react";

// interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
//   variant?: "primary" | "secondary";
// }

interface Props {
  variant?: "primary" | "secondary";
  className?: string;
}

const Button: React.FC<React.PropsWithChildren<Props>> = ({ children, variant, className }) => {
  return (
    <button
      className={clsx("w-fit py-2 px-5 bg-opacity-0 hover:bg-opacity-20 transition-colors", variant === "primary" && "border-[1px] border-primary bg-primary", variant === "secondary" && "border-[1px] border-gray bg-gray text-gray", className)}
    >
      {children}
    </button>
  );
};

export default Button;
