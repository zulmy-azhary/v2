import { Layout } from "@/components/templates";
import type { NextPage } from "next";
import { ButtonLink, Text } from "@/components/atoms";

const Custom404: NextPage = () => {
  return (
    <Layout title="404 Not Found" metaDescription="404 Page Not Found" padding="p-0">
      <div className="grid h-screen place-items-center items-center">
        <div className="flex flex-col items-center gap-y-5">
          <Text className="text-center text-base md:text-lg lg:text-2xl">
            Oops! The page you are looking for does not exist. 😥
          </Text>
          <ButtonLink variant="secondary" href="/">
            Back to Home Page
          </ButtonLink>
        </div>
      </div>
    </Layout>
  );
};

export default Custom404;
