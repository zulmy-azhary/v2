import { Layout } from "@/components/templates";
import type { NextPage } from "next";
import { Heading, Text } from "@/components/atoms";

const Projects: NextPage = () => {
  return (
    <Layout title="All Projects" metaDescription="This is v2 of my portfolio" className="min-h-[1000px]">
      <Heading content={"before:content-['/']"}>projects</Heading>
      <Text className="mt-3 text-gray">List of my projects</Text>
      <Text className="mt-24">Coming soon...</Text>
    </Layout>
  );
};

export default Projects;
