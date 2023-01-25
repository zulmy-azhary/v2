import { Button, Text } from "@/components/atoms";
import { Layout } from "@/components/templates";
import { NextPage } from "next";

const Custom404: NextPage = () => {
  return (
      <Layout title="404 Not Found" metaDescription="404 Page Not Found" padding="p-0">
        <div className="grid items-center place-items-center h-screen">
          <div className="flex flex-col items-center gap-y-5">
            <Text className="text-center text-base md:text-lg lg:text-2xl">Oops! The page you are looking for does not exist. 😥</Text>
            <Button variant="secondary" href="/">Back to Home Page</Button>
          </div>
        </div>
      </Layout>
  );
};

export default Custom404;