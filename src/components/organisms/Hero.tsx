import { HeroCodeBlock, HeroContent } from "@/components/molecules";

const Hero: React.FC = () => {
  return (
    <section className="flex flex-col items-center gap-y-6 md:gap-x-6 lg:flex-row xl:gap-x-4 2xl:justify-between">
      <HeroContent />
      <HeroCodeBlock />
    </section>
  );
};

export default Hero;
