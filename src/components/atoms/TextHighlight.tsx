import { cn } from "@/lib/utils";

type Props = React.HTMLAttributes<HTMLSpanElement>;

const TextHighlight: React.FC<React.PropsWithChildren<Props>> = (props) => {
  const { children, className, ...rest } = props;

  return (
    <span
      className={cn("bg-gradient-to-br bg-clip-text text-transparent", className ?? "from-primary to-accent")}
      {...rest}
    >
      {children}
    </span>
  );
};

export default TextHighlight;
