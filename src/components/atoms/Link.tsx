import React from "react";

interface Props {
  to?: string;
}

const Link: React.FC<React.PropsWithChildren<Props>> = ({ children, to }) => {
  return (
    <li className="before:content-['#'] before:bg-gradient-to-br before:from-primary before:to-accent before:bg-clip-text before:text-transparent">
      <a className="transition-colors text-gray hover:text-white" href={to || "#"}>
        {children}
      </a>
    </li>
  );
};

export default Link;
