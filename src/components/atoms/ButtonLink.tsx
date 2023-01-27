import clsx from "clsx";
import Link from "next/link";
import React from "react";

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "primary" | "secondary";
}

const Button: React.FC<React.PropsWithChildren<Props>> = (props) => {
  const { children, variant, className, href, ...rest } = props;

  const primaryVariant = variant === "primary" && "border-[1px] border-primary bg-primary";
  const secondaryVariant = variant === "secondary" && "border-[1px] border-gray bg-gray text-gray";
  const btnVariant = primaryVariant || secondaryVariant;
  
  return (
    <Link
      href={href as string || "/"}
      className={clsx("w-fit py-2 px-5 bg-opacity-0 hover:bg-opacity-20 transition-colors text-xs md:text-sm lg:text-base", btnVariant, className)}
      {...rest}
    >
      {children}
    </Link>
  );
};

export default Button;
