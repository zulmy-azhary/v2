import { Button, Text } from "@/components/atoms";
import { NextPage } from "next";
import Head from "next/head";

const Custom404: NextPage = () => {
  return (
    <>
      <Head>
        <title>Zulmy Azhary AS | 404 Not Found</title>
      </Head>
      <div className="grid items-center place-items-center min-h-screen">
        <div className="flex flex-col items-center gap-y-5">
          <Text className="text-center text-base md:text-lg lg:text-2xl">Oops! The page you are looking for does not exist. 😥</Text>
          <Button variant="secondary" href="/">Back to Home Page</Button>
        </div>
      </div>
    </>
  );
};

export default Custom404;