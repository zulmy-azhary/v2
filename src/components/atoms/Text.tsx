import { cn } from "@/lib/utils";

interface Props extends React.HTMLAttributes<HTMLParagraphElement> {
  itemList?: boolean;
  fontWeight?: string;
}

const Text: React.FC<React.PropsWithChildren<Props>> = (props) => {
  const { itemList, fontWeight, children, className, ...rest } = props;

  return (
    <p
      className={cn(
        itemList && "before:mr-1 before:bg-red-400 before:bg-clip-text before:text-transparent before:content-['#']",
        fontWeight ?? "font-light",
        className
      )}
      {...rest}
    >
      {children}
    </p>
  );
};

export default Text;
