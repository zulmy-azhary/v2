import type { Tech } from "@/types";
import { Text } from "@/components/atoms";
import { cn } from "@/lib/utils";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  skills: Tech[];
}

const SkillCard: React.FC<Props> = (props) => {
  const { title, skills, className, ...rest } = props;

  return (
    <div className={cn("h-full border border-gray md:h-fit lg:w-fit", className)} {...rest}>
      <div className="h-fit border-b border-gray px-4 py-2 lg:px-3 xl:px-4">
        <h3 className="text-lg font-bold md:text-base lg:text-lg xl:text-xl">{title}</h3>
      </div>
      <div className={cn("p-3 md:p-4 lg:p-3 xl:p-4", skills.length > 5 && "grid grid-flow-col grid-rows-4")}>
        {skills.map((skill, i) => (
          <Text className="text-sm text-gray lg:text-base" itemList key={i}>
            {skill.name}
          </Text>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;
