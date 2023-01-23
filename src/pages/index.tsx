import { NextPage } from "next";
import { Layout } from "@/components/templates";
import { About, Contact, Hero, Projects, Quote, Skills, SocialMedia } from "@/components/organisms";

const Home: NextPage = () => {
  return (
    <>
      <SocialMedia />
      <Layout title="Front End Developer" metaDescription="This is v2 of my portfolio">
        <Hero />
        <Quote />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </Layout>
    </>
  );
};

export default Home;
