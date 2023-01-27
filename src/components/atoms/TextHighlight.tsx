import React from "react"
import clsx from "clsx";

interface Props extends React.HTMLAttributes<HTMLSpanElement> {}

const TextHighlight: React.FC<React.PropsWithChildren<Props>> = (props) => {
  const { children, className, ...rest } = props;
  
  return (
    <span className={clsx("bg-gradient-to-br bg-clip-text text-transparent", className ?? "from-primary to-accent")} {...rest}>
      {children}
    </span>
  )
}

export default TextHighlight