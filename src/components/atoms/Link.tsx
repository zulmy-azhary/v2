import React from "react";
import clsx from "clsx";
import { Link as ReactScrollLink, type ScrollLinkProps } from "react-scroll";

type Props = ScrollLinkProps<React.ButtonHTMLAttributes<HTMLButtonElement>>;

const Link: React.FC<React.PropsWithChildren<Props>> = ({ children, to, className, ...rest }) => {
  return (
    <ReactScrollLink
      duration={500}
      smooth={true}
      className={clsx("text-gray transition-colors hover:text-white", className)}
      href={`#${to}`}
      to={to}
      {...rest}
    >
      {children}
    </ReactScrollLink>
  );
};

export default Link;
