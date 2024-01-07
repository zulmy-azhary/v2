import React from "react";
import { cn } from "@/lib/utils";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  border?: string;
  borderColor?: string;
}

const Square: React.FC<Props> = (props) => {
  const { border, borderColor, children, className, ...rest } = props;

  return (
    <div className={cn(className ?? "h-full w-full", border ?? "border-[1px]", borderColor ?? "border-gray")} {...rest}>
      {children}
    </div>
  );
};

export default Square;
