import { cn } from "@/lib/utils";

interface Props extends React.HTMLAttributes<HTMLHeadingElement> {
  content?: string;
  hasLine?: boolean;
}

const Heading: React.FC<React.PropsWithChildren<Props>> = (props) => {
  const { content, hasLine, children, className, ...rest } = props;

  return (
    <h2
      className={cn(
        "flex grow items-center text-2xl font-medium before:mr-1 before:bg-primary before:bg-clip-text before:text-3xl before:text-transparent lg:grow-0 lg:text-3xl lg:before:text-4xl xl:text-4xl xl:before:text-5xl",
        className ?? "lg:basis-2/4",
        content ?? "before:content-['#']",
        hasLine && "after:ml-1 after:h-[1px] after:w-full after:bg-primary"
      )}
      {...rest}
    >
      {children}
    </h2>
  );
};

export default Heading;
