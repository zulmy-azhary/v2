import { cn } from "@/lib/utils";
import { ButtonLink, Heading } from "@/components/atoms";

type SectionType = "about" | "projects" | "skills" | "contacts";

type Props = React.HTMLAttributes<HTMLElement> & {
  section?: SectionType | string;
  headingTitle?: string;
  headingClassName?: string;
  hasLine?: boolean;
  hasDetails?: boolean;
};

const Section: React.FC<React.PropsWithChildren<Props>> = (props) => {
  const { hasLine = true, hasDetails, children, section, className, headingTitle, headingClassName, ...rest } = props;

  return (
    <section
      id={section}
      className={cn("flex min-h-[24rem] flex-col gap-y-10 pt-28 md:gap-y-16 md:pt-32", className)}
      {...rest}
    >
      <div className="flex flex-row justify-between">
        <Heading hasLine={hasLine} className={headingClassName}>
          {headingTitle ?? section}
        </Heading>
        {section === "projects" && hasDetails && (
          <ButtonLink variant="primary" className="self-end md:self-auto" href="/projects">
            View all {"~~>"}
          </ButtonLink>
        )}
      </div>
      {children}
    </section>
  );
};

export default Section;
