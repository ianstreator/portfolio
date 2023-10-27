import { AiFillGithub } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";
import { FaReact, FaSass, FaNodeJs } from "react-icons/fa";
import { TbBrandNextjs, TbBrandTypescript } from "react-icons/tb";
import { BiLogoTailwindCss } from "react-icons/bi";
import { ProjectData } from "../../types";

function ProjectCard({ title, githubHREF, siteHREF, stack }: ProjectData) {
  const iconSize = 30;

  const stackMap: { [name: string]: React.JSX.Element } = {
    Next: <TbBrandNextjs size={iconSize} color="#D4D4D8" />,
    React: <FaReact size={iconSize} color="#67E8F9" />,
    Tailwind: <BiLogoTailwindCss size={iconSize} color="#5EEAD4" />,
    Node: <FaNodeJs size={iconSize} color="#BEF264" />,
    Scss: <FaSass size={iconSize} color="#FDA4AF" />,
    Typescript: <TbBrandTypescript size={iconSize} color="#7DD3FC" />,
  };

  return (
    <div className="project-card bg-theme-neutral/25 z-0 mb-8 lg:mr-4 rounded-md flex flex-col overflow-hidden shadow-md ease-in duration-300">
      <div className="flex w-full">
        <div className="w-3/5 bg-theme-accent text-center p-2 rounded-br-md">
          {title}
        </div>
        <div className="flex items-center w-2/5 justify-start font-bold font-sans">
          {githubHREF ? (
            <a
              rel="noreferrer"
              target="blank"
              href={githubHREF}
              title="repo"
              className="group"
            >
              <AiFillGithub size={iconSize} className="ml-3" />
            </a>
          ) : (
            <AiFillGithub size={iconSize} opacity={0.25} className="ml-3" />
          )}
          {siteHREF ? (
            <a
              rel="noreferrer"
              target={siteHREF === "#" ? "_self" : "_blank"}
              href={siteHREF}
              title="app"
              className="group"
            >
              <CgWebsite size={iconSize} className="ml-3" />
            </a>
          ) : (
            <CgWebsite size={iconSize} opacity={0.25} className="ml-3" />
          )}
        </div>
      </div>

      <div className="flex w-full justify-between grow pointer-events-none">
        <div className="w-3/5 p-3 flex items-center justify-center">
          <img
            src={`/desktop-${title
              .replace("'", "")
              .replace(" ", "-")
              .toLowerCase()}.webp`}
            width={200}
            height={200}
            alt={title}
          ></img>
        </div>

        <div className="w-1/3 flex">
          <div className="w-1/2 bg-theme-accent ml-auto rounded-tl-3xl flex flex-col justify-start items-center p-2 relative">
            {stack.map((tech, i) => (
              <div key={i} className="my-1 relative flex justify-start">
                {stackMap[tech]}
                <div className="bg-gradient-to-r from-theme-accent from-25% to-theme-primary shadow-md w-fit h-full absolute top-0 -z-10 pl-1.5 pr-40 rounded-l-sm flex items-center text-xs font-bold font-sans transition-all duration-300 hover:-ml-[5.5rem] pointer-events-auto">
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
