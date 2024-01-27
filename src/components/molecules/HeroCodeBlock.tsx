import { PrismAsync as SyntaxHighlighter } from "react-syntax-highlighter";
import theme from "react-syntax-highlighter/dist/cjs/styles/prism/one-dark";
import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

/*
  Life is a blank canvas, paint it with the colors of your experiences.
  Each stroke tells a story, each shade holds a memory.
  The masterpiece is not the destination, but the journey of creation.
*/

const code = `function createSystem(): System {
  return new CreateSystem();
};

function gatherFeatures(): Feature[] {
  return Design.getAllFeatures();
};

function applyFeature(system: System, feature: Feature) {
  const { aesthetics, functionality } = feature;
  
  system.addAesthetics(aesthetics);
  system.addFunctionality(functionality);
};

function buildSystem(): System {
  const system = createSystem();
  const features = gatherFeatures();

  features.forEach(feature => {
    applyFeature(system, feature);
  });

  return system;
};

const elegantSystem = buildSystem();`;

const HeroCodeBlock: React.FC = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 75 });
  const mouseYSpring = useSpring(y, { stiffness: 75 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!cardRef.current) return;
    const rect = (cardRef.current as HTMLElement).getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) / width - 0.5;
    const mouseY = (e.clientY - rect.top) / height - 0.5;

    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className="w-full text-xs md:min-h-[27rem] md:text-base lg:basis-3/5 lg:text-sm xl:basis-1/2 xl:text-base 2xl:basis-4/12">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d"
        }}
        className="relative rounded bg-card/30"
      >
        <SyntaxHighlighter
          language="typescript"
          style={theme}
          customStyle={{
            transform: "translateZ(75px)",
            transformStyle: "preserve-3d"
          }}
        >
          {code}
        </SyntaxHighlighter>
      </motion.div>
    </div>
  );
};

export default HeroCodeBlock;
