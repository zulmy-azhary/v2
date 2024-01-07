import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";

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
      href={(href as string) || "/"}
      className={cn(
        "flex w-fit items-center bg-opacity-20 py-2 px-5 font-firaCode text-xs transition-colors hover:bg-opacity-30 md:text-sm lg:text-base 2xl:text-xl",
        btnVariant,
        className
      )}
      scroll={false}
      {...rest}
    >
      {children}
    </Link>
  );
};

export default Button;
