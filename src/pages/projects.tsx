import { Layout } from "@/components/templates";
import type { NextPage } from "next";
import { Projects as ProjectComponent } from "@/components/organisms";
import { ButtonLink, Heading, Text } from "@/components/atoms";

const Projects: NextPage = () => {
  return (
    <Layout title="All Projects" metaDescription="This is v2 of my portfolio" className="min-h-[1000px]">
      <div className="flex items-center justify-between">
        <Heading className="after:!bg-gray lg:!grow" hasLine content={"before:content-['/']"}>
          projects
        </Heading>
        <ButtonLink variant="secondary">{"<~~"} Back</ButtonLink>
      </div>
      <Text className="mt-3 text-gray">List of my projects</Text>
      <ProjectComponent headingTitle="main" type="main" hasLine={false} />
      <ProjectComponent headingTitle="unfinished" type="unfinished" hasLine={false} />
      <ProjectComponent headingTitle="other" type="others" hasLine={false} />
    </Layout>
  );
};

export default Projects;
