import React from "react"
import clsx from "clsx";

interface Props {
  className?: string;
}

const TextHighlight: React.FC<React.PropsWithChildren<Props>> = ({ children, className }) => {
  return (
    <span className={clsx("bg-gradient-to-br bg-clip-text text-transparent", className || "from-primary to-accent")}>
      {children}
    </span>
  )
}

export default TextHighlight