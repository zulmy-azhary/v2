import React from "react";
import { AboutContent, AboutPicture, AboutStatus, Section } from "@/components/molecules";

const About: React.FC = () => {
  return (
    <Section section={"about"} className="md:gap-y-10" headingClassName="basis-3/4">
      <div className="flex flex-col-reverse items-center justify-between gap-x-5 gap-y-5 lg:flex-row xl:gap-x-12">
        <AboutContent />
        <div className="pt-12 md:min-h-[27rem] md:w-4/6 lg:w-fit lg:basis-2/5 2xl:basis-4/12">
          <AboutPicture />
          <AboutStatus />
        </div>
      </div>
    </Section>
  );
};

export default About;
