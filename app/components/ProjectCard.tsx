import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";
import { FaReact, FaSass, FaNodeJs } from "react-icons/fa";
import { TbBrandNextjs, TbBrandTypescript } from "react-icons/tb";
import { BiLogoTailwindCss } from "react-icons/bi";
import { ProjectData } from "../../types";
import Image from "next/image";

function ProjectCard({
  title,
  githubHREF,
  siteHREF,
  stack,
}: ProjectData) {
  const iconSize = 30;

  const stackMap: { [name: string]: React.JSX.Element } = {
    next: <TbBrandNextjs size={iconSize} color="#D4D4D8" />,
    react: <FaReact size={iconSize} color="#67E8F9" />,
    tailwind: <BiLogoTailwindCss size={iconSize} color="#5EEAD4" />,
    node: <FaNodeJs size={iconSize} color="#BEF264" />,
    scss: <FaSass size={iconSize} color="#FDA4AF" />,
    typescript: <TbBrandTypescript size={iconSize} color="#7DD3FC" />,
  };

  return (
    <div className="project-card bg-neutral/25 z-0 mb-8 rounded-md flex flex-col overflow-hidden shadow-md ease-in duration-300">
      <div className="flex w-full">
        <div className="w-3/5 bg-accent text-center font-bold p-2 rounded-br-md">
          {title}
        </div>
        <div className="flex items-center w-2/5 justify-start">
          <a rel="noreferrer" target="blank" href={githubHREF} className="group">
            <AiFillGithub
              size={iconSize}
              opacity={!githubHREF ? 0.25 : undefined}
              className="ml-3"
            />
            <div className={`opacity-0 ${githubHREF ? "group-hover:opacity-100" : undefined} absolute bg-accent text-xs rounded-md p-2 shadow-md z-50 pointer-events-none`}>
              github
            </div>
          </a>
          <a rel="noreferrer" target="blank" href={siteHREF} className="group">
            <CgWebsite
              size={iconSize}
              opacity={!siteHREF ? 0.25 : undefined}
              className="ml-3"
            />
            <div className={`opacity-0 ${siteHREF ? "group-hover:opacity-100" : undefined} absolute bg-accent text-xs rounded-md p-2 shadow-md z-50 pointer-events-none`}>
              website
            </div>
          </a>
        </div>
      </div>

      <div className="flex w-full grow pointer-events-none">
        <div className="w-3/5 p-3 flex items-center justify-center">
          <Image
            src={`/desktop-${title.replace("'", "").replace(" ", "-")}.webp`}
            width={200}
            height={200}
            alt={title}
          ></Image>
        </div>

        <div className="w-2/5 flex">
          <div className="w-1/2 bg-accent ml-auto rounded-tl-3xl flex flex-col justify-start items-center p-2 relative">
            {stack.map((tech, i) => (
              <div key={i} className="my-1 relative flex justify-start">
                {stackMap[tech]}
                <div
                  key={i}
                  className="bg-gradient-to-r from-accent from-25% to-primary shadow-md w-fit h-full absolute top-0 -z-10 pl-1.5 pr-40 rounded-l-sm flex items-center text-xs transition-all duration-300 hover:-ml-[5.5rem] pointer-events-auto"
                >
                  {tech}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
