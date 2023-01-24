import React from "react";
import { Section, SkillCard } from "@/components/molecules";

const Skills: React.FC = () => {
  return (
    <Section section={"skills"} headingClassName="basis-5/12">
      <div className="flex flex-col lg:flex-row">
        <div className="basis-2/5"></div>
        <div className="basis-3/5 grid grid-flow-row lg:grid-flow-col grid-cols-1 lg:grid-rows-2 gap-5">
          <SkillCard title="Languages" items={["Javascript", "Typescript"]} />
          <SkillCard title="Framework/Library" items={["Sass", "ReactJs", "VueJs", "Svelte", "NextJs"]} />
          <SkillCard
            title="Ui Framework/Component"
            items={["TailwindCSS", "Bootstrap", "Material UI", "Chakra UI", "Styled Components"]}
          />
          <SkillCard title="Databases" items={["Firebase", "MariaDB"]} />
          <SkillCard title="Others" items={["VsCode", "Figma", "Framer Motion", "Vite"]} />
        </div>
      </div>
    </Section>
  );
};

export default Skills;
