import { cn } from "@/lib/utils";

interface Props extends React.SVGAttributes<HTMLOrSVGElement> {
  width?: string;
  height?: string;
}

const Logo: React.FC<Props> = (props) => {
  const { className, width, height, ...rest } = props;

  return (
    <svg
      width={width || "42"}
      height={height || "48"}
      viewBox={`0 0 ${width || "42"} ${height || "48"}`}
      xmlns="http://www.w3.org/2000/svg"
      className={cn("stroke-primary stroke-2 transition-colors", className)}
      fill="none"
      {...rest}
    >
      <path d="M21 1L41 19.486L21 37.972L10.7778 28.514L21 19.0561" />
      <path d="M21 47L1 28.514L21 10.028L30.7778 19.486L21 28.9439" />
    </svg>
  );
};

export default Logo;
