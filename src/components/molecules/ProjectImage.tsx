import Image from "next/image";

interface Props {
  src: React.ComponentProps<"img">["src"];
  title: string;
}

const ProjectImage: React.FC<Props> = ({ src, title }) => {
  return (
    <div className="overflow-hidden rounded-t">
      <Image
        className="aspect-video w-full cursor-pointer select-none object-cover transition-transform duration-500 hover:scale-[1.125]"
        src={src ?? "https://place-hold.it/512x512/fff.png?text=No Preview"}
        width={512}
        height={512}
        alt={`${title} Image`}
        priority
      />
    </div>
  );
};

export default ProjectImage;
