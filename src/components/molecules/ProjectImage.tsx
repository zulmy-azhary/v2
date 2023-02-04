import { Box } from "@/components/atoms";
import Image from "next/image";
import React from "react";

interface Props {
  src?: string;
  title: string;
}

const ProjectImage: React.FC<Props> = ({ src, title }) => {
  return (
    <>
      {src && (
        <Box className="overflow-hidden" border="border-b">
          <Image
            className="aspect-video w-auto cursor-pointer select-none object-cover transition-transform duration-500 hover:scale-[1.125]"
            src={src}
            width={512}
            height={512}
            alt={`${title} Image`}
            priority
          />
        </Box>
      )}
    </>
  );
};

export default ProjectImage;
