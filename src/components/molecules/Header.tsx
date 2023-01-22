import React from "react";
import { Heading, Button } from "@/components/atoms";

type Section = "about" | "projects" | "skills" | "contacts";

interface Props {
  section?: Section;
}

const Header: React.FC<Props> = ({ section }) => {
  return (
    <div className="flex justify-between flex-col md:flex-row">
      <Heading>{section}</Heading>
      {section === "projects" && (
        <Button className="self-end md:self-auto">View all {"~~>"}</Button>
      )}
    </div>
  );
};

export default Header;
