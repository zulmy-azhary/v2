import React from "react";

interface Props extends React.HTMLAttributes<HTMLParagraphElement> {}

const Text: React.FC<React.PropsWithChildren<Props>> = ({ children, className, ...rest }) => {
  return (
    <p className={className} {...rest}>
      {children}
    </p>
  );
};

export default Text;
