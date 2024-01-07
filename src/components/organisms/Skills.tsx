import React from "react";
import { Section, SkillCard, SkillSphere } from "@/components/molecules";
import { databases, frameworkOrLibraries, languages, others, uiFrameworkOrComponents } from "@/data/skills";

const Skills: React.FC = () => {
  return (
    <Section section={"skills"} headingClassName="basis-5/12">
      <div className="flex flex-col gap-y-6 font-andika lg:flex-row lg:gap-x-6">
        <SkillSphere />
        <div className="grid basis-3/5 grid-flow-row grid-cols-2 gap-5 md:grid-cols-7 lg:basis-4/6 lg:grid-flow-col lg:grid-cols-1 lg:grid-rows-2 lg:place-items-end xl:basis-3/5">
          <SkillCard
            title="Languages"
            skills={languages}
            className="md:col-span-2 md:col-start-3 md:self-end lg:order-last lg:col-auto"
          />
          <SkillCard
            title="Frameworks/Libraries"
            skills={frameworkOrLibraries}
            className="order-first col-span-2 md:order-none md:col-span-3 md:col-start-5 md:self-end lg:col-auto lg:col-start-3 lg:row-start-1 xl:col-start-3 xl:row-start-2 xl:place-self-start"
          />
          <SkillCard
            title="Ui Frameworks/Components"
            skills={uiFrameworkOrComponents}
            className="order-last col-span-2 md:order-first md:col-span-3 md:row-span-2 md:row-start-2 md:self-center lg:order-none lg:col-span-2 lg:col-start-1 lg:row-auto lg:row-start-2 lg:self-start xl:col-span-1 xl:col-start-3 xl:row-start-1 xl:self-end"
          />
          <SkillCard
            title="Databases"
            skills={databases}
            className="md:col-span-2 md:col-start-6 lg:col-auto lg:col-start-3 lg:row-start-2 lg:self-start lg:justify-self-start xl:col-start-2 xl:row-start-2 xl:justify-self-end"
          />
          <SkillCard
            title="Others"
            skills={others}
            className="col-start-2 row-span-2 row-start-2 self-end md:col-span-2 md:col-start-1 md:row-span-2 md:row-start-1 md:self-center lg:order-first lg:col-auto lg:row-auto lg:self-end xl:col-start-2 xl:row-start-1"
          />
        </div>
      </div>
    </Section>
  );
};

export default Skills;
