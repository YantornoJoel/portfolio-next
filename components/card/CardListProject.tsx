import { FC } from "react";

import { IProject } from "../../interfaces";
import { CardProject } from "./index";

interface Props {
  projects: IProject[];
}

export const CardListProject: FC<Props> = ({ projects }) => {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center md:justify-start gap-16 mt-10">
      {projects.map((project) => (
        <CardProject key={project.title} {...project} />
      ))}
    </ul>
  );
};
