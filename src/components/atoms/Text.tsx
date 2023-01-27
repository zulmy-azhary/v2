import React from "react";
import clsx from 'clsx';

interface Props extends React.HTMLAttributes<HTMLParagraphElement> {
  itemList?: boolean;
}

const Text: React.FC<React.PropsWithChildren<Props>> = (props) => {
  const { itemList, children, className, ...rest } = props;
  
  return (
    <p className={clsx(className, itemList && "before:content-['#'] before:mr-1 before:bg-gradient-to-br before:from-primary before:to-accent before:bg-clip-text before:text-transparent")} {...rest}>
      {children}
    </p>
  );
};

export default Text;
