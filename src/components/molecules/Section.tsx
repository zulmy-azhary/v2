import React from "react";
import clsx from "clsx";
import { ButtonLink, Heading } from "@/components/atoms";

type SectionType = "about" | "projects" | "skills" | "contacts";

type Props = React.HTMLAttributes<HTMLElement> & {
  section?: SectionType;
  headingClassName?: string;
};

const Section: React.FC<React.PropsWithChildren<Props>> = (props) => {
  const { children, section, className, headingClassName, ...rest } = props;

  return (
    <section
      id={section}
      className={clsx("flex min-h-[24rem] flex-col gap-y-10 pt-28 md:gap-y-16 md:pt-32", className)}
      {...rest}
    >
      <div className="flex flex-row justify-between">
        <Heading hasLine className={headingClassName}>
          {section}
        </Heading>
        {section === "projects" && (
          <ButtonLink
            className="self-end border-l-[1px] border-primary hover:text-primary md:self-auto"
            href="/projects"
          >
            View all {"~~>"}
          </ButtonLink>
        )}
      </div>
      {children}
    </section>
  );
};

export default Section;
