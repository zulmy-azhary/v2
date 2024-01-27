import { Text } from "@/components/atoms";

interface Props {
  title: string;
}

const ProjectTitle: React.FC<Props> = ({ title }) => {
  return (
    <div className="absolute w-fit -translate-y-1/2 bg-card px-3 py-2 md:px-5">
      <Text fontWeight="font-bold" className="text-lg xl:text-xl">
        {title}
      </Text>
    </div>
  );
};

export default ProjectTitle;
