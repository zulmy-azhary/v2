import { ButtonLink, Text } from "@/components/atoms";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  description?: string;
  repoUrl: string;
  liveUrl?: string;
}

const ProjectDescription: React.FC<Props> = (props) => {
  const { description, repoUrl, liveUrl, ...rest } = props;
  return (
    <div className="flex flex-col gap-y-5 p-3 md:p-5" {...rest}>
      <Text className="text-sm text-gray lg:text-base">
        {description ?? "Lorem ipsum, dolor sit amet consectetur adipisicing elit."}
      </Text>
      <div className="flex gap-x-3">
        {liveUrl && (
          <ButtonLink href={liveUrl} target={"_blank"} variant="primary">
            Live {"|>"}
          </ButtonLink>
        )}
        <ButtonLink href={repoUrl} target={"_blank"} variant="secondary">
          Repo {"<~>"}
        </ButtonLink>
      </div>
    </div>
  );
};

export default ProjectDescription;
