import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";

function ProjectCard() {
  return (
    <div className="project-card bg-neutral/25 mb-8 rounded-md flex flex-col">
      <div className="flex w-full">
        <div className="w-3/5 bg-accent text-center font-bold p-2 rounded-br-md">
          API
        </div>
        <div className="flex items-center w-2/5 justify-start">
          <AiFillGithub size={25} className="ml-3" />
          <CgWebsite size={25} className="ml-3" />
        </div>
      </div>

      <div className="flex w-full grow">
        <div className="w-3/5 p-3 flex items-center justify-center">
          Image
        </div>

        <div className="w-2/5 flex">
          <div className="w-1/2 bg-accent ml-auto rounded-tl-3xl flex flex-col justify-between items-center p-2">stack</div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
