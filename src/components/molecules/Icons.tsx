import { Icon } from "@/components/atoms";
import { socialMedias } from "@/data/socialMedias";

const Icons: React.FC = () => {
  return (
    <>
      {socialMedias.map(({ iconName, url }, i) => (
        <a key={i} href={url} target="_blank" rel="noreferrer" aria-label="Visit my social media">
          <Icon iconName={iconName} />
        </a>
      ))}
    </>
  );
};

export default Icons;
