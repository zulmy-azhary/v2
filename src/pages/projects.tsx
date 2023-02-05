import { Layout } from "@/components/templates";
import type { NextPage } from "next";
import { Projects as ProjectComponent } from "@/components/organisms";
import { Heading, Text } from "@/components/atoms";

const Projects: NextPage = () => {
  return (
    <Layout title="All Projects" metaDescription="This is v2 of my portfolio" className="min-h-[1000px]">
      <Heading content={"before:content-['/']"}>projects</Heading>
      <Text className="mt-3 text-gray">List of my projects</Text>
      <ProjectComponent headingTitle="main-projects" type="main" hasLine={false} />
      <ProjectComponent headingTitle="unfinished-projects" type="unfinished" hasLine={false} />
      <ProjectComponent headingTitle="other-projects" type="others" hasLine={false} />
    </Layout>
  );
};

export default Projects;
