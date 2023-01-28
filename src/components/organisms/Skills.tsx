import React from "react";
import { Section, SkillCard, SkillObjects } from "@/components/molecules";
import {
  databases,
  frameworkOrLibraries,
  languages,
  others,
  uiFrameworkOrComponents,
} from "@/helpers/skills";

const Skills: React.FC = () => {
  return (
    <Section section={"skills"} headingClassName="basis-5/12" className="lg:pt-16">
      <div className="flex flex-col lg:flex-row gap-y-6 lg:gap-x-6">
        <SkillObjects />
        <div className="basis-3/5 lg:basis-4/6 xl:basis-3/5 grid grid-flow-row lg:grid-flow-col grid-cols-2 md:grid-cols-7 lg:grid-cols-1 lg:grid-rows-2 gap-5 lg:place-items-end">
          <SkillCard
            title="Languages"
            skills={languages}
            className="md:col-start-3 md:col-span-2 lg:col-auto md:self-end lg:order-last"
          />
          <SkillCard
            title="Frameworks/Libraries"
            skills={frameworkOrLibraries}
            className="order-first md:order-none md:col-start-5 col-span-2 md:col-span-3 lg:col-auto lg:col-start-3 xl:col-start-3 lg:row-start-1 xl:row-start-2 md:self-end xl:place-self-start"
          />
          <SkillCard
            title="Ui Frameworks/Components"
            skills={uiFrameworkOrComponents}
            className="order-last md:order-first lg:order-none md:row-start-2 lg:row-start-2 xl:row-start-1 md:row-span-2 lg:row-auto col-span-2 md:col-span-3 lg:col-span-2 xl:col-span-1 lg:col-start-1 xl:col-start-3 md:self-center lg:self-start xl:self-end"
          />
          <SkillCard
            title="Databases"
            skills={databases}
            className="md:col-start-6 md:col-span-2 xl:col-start-2 lg:col-start-3 lg:col-auto lg:row-start-2 xl:row-start-2 lg:justify-self-start lg:self-start xl:justify-self-end"
          />
          <SkillCard
            title="Others"
            skills={others}
            className="row-span-2 self-end md:self-center lg:self-end col-start-2 md:col-start-1 md:col-span-2 md:row-start-1 md:row-span-2 row-start-2 lg:col-auto lg:row-auto lg:order-first xl:col-start-2 xl:row-start-1"
          />
        </div>
      </div>
    </Section>
  );
};

export default Skills;
