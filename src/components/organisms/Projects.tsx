import React from "react";
import { ProjectCard, Section } from "@/components/molecules";

const Projects: React.FC = () => {
  return (
    <Section section={"projects"} headingClassName="lg:grow">
      <div className="gap-4 grid grid-cols-1 md:grid-cols-6 xl:grid-cols-12">
        <ProjectCard
          src={"/assets/projects/rest-countries.jpg"}
          title="Rest Countries"
          techList={["Typescript", "NextJs", "Styled Components"]}
          repoUrl="https://github.com/zulmy-azhary/rest-countries"
          liveUrl="https://zoel-restcountries.vercel.app/"
        />
        <ProjectCard
          src={"/assets/projects/countdown-timer.jpg"}
          title="Countdown Timer"
          techList={["Typescript", "Svelte"]}
          repoUrl="https://github.com/zulmy-azhary/countdown-timer"
          liveUrl="https://zoel-countdowntimer.vercel.app/"
        />
        <ProjectCard
          src={"/assets/projects/cc-interactive.jpg"}
          title="Interactive Credit Card"
          techList={["Typescript", "VueJs", "Vuelidate"]}
          repoUrl="https://github.com/zulmy-azhary/cc-interactive"
          liveUrl="https://cc-interactive.vercel.app/"
        />
        <ProjectCard
          src={"/assets/projects/multistep-form.jpg"}
          title="Multistep Form"
          techList={["Typescript", "ReactJs", "Styled Components", "React Hook Form"]}
          repoUrl="https://github.com/zulmy-azhary/multistep-form"
          liveUrl="https://react-multistepform.vercel.app/"
        />
        <ProjectCard
          src={"/assets/projects/space-tourism.jpg"}
          title="Space Tourism"
          techList={["Typescript", "NextJs", "Styled Components", "Framer Motion"]}
          repoUrl="https://github.com/zulmy-azhary/space-tourism"
          liveUrl="https://zoel-space-tourism.vercel.app/"
        />
        <ProjectCard
          src={"/assets/projects/fake-store.jpg"}
          title="Fake Store"
          techList={["Typescript", "ReactJs", "Material UI", "React Router DOM"]}
          repoUrl="https://github.com/zulmy-azhary/fake-store"
          liveUrl="https://fake-store-demo.vercel.app/store"
        />
      </div>
    </Section>
  );
};

export default Projects;
