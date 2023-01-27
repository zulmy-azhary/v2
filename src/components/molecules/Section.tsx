import React from "react";
import { ButtonLink, Heading } from "@/components/atoms";
import clsx from "clsx";

type SectionType = "about" | "projects" | "skills" | "contacts";

interface Props extends React.HTMLAttributes<HTMLElement> {
  section: SectionType;
  headingClassName?: string;
}

const Section: React.FC<React.PropsWithChildren<Props>> = (props) => {
  const { children, section, className, headingClassName, ...rest } = props;

  return (
    <section id={section} className={clsx("min-h-[24rem] pt-32 flex flex-col gap-y-10 md:gap-y-16", className)} {...rest}>
      <div className="flex justify-between flex-row">
        <Heading className={headingClassName}>{section}</Heading>
        {section === "projects" && (
          <ButtonLink className="self-end md:self-auto hover:text-primary border-l-[1px] border-primary" href="/projects">View all {"~~>"}</ButtonLink>
        )}
      </div>
      {children}
    </section>
  );
};

export default Section;
