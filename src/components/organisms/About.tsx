import React from "react";
import { AboutContent, Header } from "@/components/molecules";

const About: React.FC = () => {
  return (
    <section id="about" className="min-h-[1000px]">
      <Header section={"about"} />
      <div className="flex mt-20">
        <AboutContent />
        <div className="basis-2/5">Test</div>
      </div>
    </section>
  );
};

export default About;
