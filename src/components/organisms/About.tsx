import React from "react";
import { AboutContent, AboutImage, Section } from "@/components/molecules";

const About: React.FC = () => {
  return (
    <Section section={"about"} className="md:gap-y-10" headingClassName="basis-3/4">
      <div className="flex flex-col-reverse items-center gap-x-5 gap-y-5 lg:flex-row xl:gap-x-12">
        <AboutContent />
        <AboutImage />
      </div>
    </Section>
  );
};

export default About;
