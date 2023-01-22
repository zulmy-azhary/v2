import React from "react";

interface Props {
  className?: string;
}

const Text: React.FC<React.PropsWithChildren<Props>> = ({ children, className }) => {
  return <p className={className}>{children}</p>;
};

export default Text;
