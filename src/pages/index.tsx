import { NextPage } from "next";
import { Layout } from "@/components/templates";
import { Hero, Quote, SocialMedia } from "@/components/organisms";
import About from "@/components/organisms/About";

const Home: NextPage = () => {
  return (
    <Layout title="Front End Developer" metaDescription="This is v2 of my portfolio">
      <SocialMedia />
      <Hero />
      <Quote />
      <About />
    </Layout>
  );
};

export default Home;
