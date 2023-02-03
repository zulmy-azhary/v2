import Link from "next/link";
import React from "react";
import clsx from "clsx";

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
      className={clsx(
        "w-fit bg-opacity-0 py-2 px-5 text-xs transition-colors hover:bg-opacity-20 md:text-sm lg:text-base",
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
