import React from "react";
import clsx from "clsx";

interface Props extends React.LiHTMLAttributes<HTMLLIElement> {
  to?: string;
}

const Link: React.FC<React.PropsWithChildren<Props>> = ({ children, to, className, ...rest }) => {
  return (
    <li
      className={clsx(
        "before:bg-gradient-to-br before:from-primary before:to-accent before:bg-clip-text before:text-transparent before:content-['#']",
        className
      )}
      {...rest}
    >
      <a className="text-gray transition-colors hover:text-white" href={to || "#"}>
        {children}
      </a>
    </li>
  );
};

export default Link;
