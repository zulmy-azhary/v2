import React from "react";
import { Section, SkillCard } from "@/components/molecules";

const Skills: React.FC = () => {
  return (
    <Section section={"skills"} headingClassName="basis-5/12">
      <div className="flex flex-col lg:flex-row">
        <div className="basis-2/5"></div>
        <div className="basis-3/5 grid grid-flow-row lg:grid-flow-col grid-cols-2 md:grid-cols-3 lg:grid-cols-1 lg:grid-rows-2 gap-5 lg:place-items-end">
          <SkillCard
            title="Languages"
            items={["Javascript", "Typescript"]}
            className="md:self-end lg:order-last"
          />
          <SkillCard
            title="Framework/Library"
            items={["Sass", "ReactJs", "VueJs", "Svelte", "NextJs"]}
            className="order-first md:order-none col-span-2 md:col-auto lg:col-start-3 xl:col-start-3 lg:row-start-1 xl:row-start-2 md:self-end xl:place-self-start"
          />
          <SkillCard
            title="Ui Framework/Component"
            items={["TailwindCSS", "Bootstrap", "Material UI", "Chakra UI", "Styled Components"]}
            className="order-last col-span-2 md:col-auto md:self-center md:order-first lg:order-none md:row-span-2 lg:row-auto lg:col-span-2 xl:col-span-1 lg:col-start-1 xl:col-start-3 lg:row-start-2 xl:row-start-1"
          />
          <SkillCard
            title="Databases"
            items={["Firebase", "MariaDB"]}
            className="md:col-start-3 xl:col-start-2 lg:row-start-2 xl:row-start-2 lg:justify-self-start lg:self-start xl:justify-self-end"
          />
          <SkillCard
            title="Others"
            items={["VsCode", "Figma", "Framer Motion", "Vite"]}
            className="row-span-2 self-end col-start-2 row-start-2 lg:col-auto lg:row-auto lg:order-first xl:col-start-2 xl:row-start-1"
          />
        </div>
      </div>
    </Section>
  );
};

export default Skills;
