import React from "react"
import clsx from "clsx";

interface Props {
  size: number;
  className?: string;
  gridCols?: string;
}

const Dots: React.FC<Props> = ({ size, gridCols, className }) => {
  return (
    <div className={clsx("grid", className || "gap-4", gridCols ? `grid-cols-${gridCols}` : "grid-cols-5")}>
      {Array.from(new Array(size)).map((_, idx) => (
        <span key={idx} className="w-1 h-1 rounded-full bg-gradient-to-br from-primary to-accent bg-fixed" />
      ))}
    </div>
  )
}

export default Dots