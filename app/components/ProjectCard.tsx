import { AiFillGithub as GithubIcon } from "react-icons/ai";
import { CgWebsite as AppIcon } from "react-icons/cg";

import { ProjectData } from "../../types";
import { techIconMap, ICON_SIZE } from "../utils/reactIcons";

function ProjectCard({ title, githubHREF, siteHREF, techStack }: ProjectData) {
  const projectImageSize = 200
  return (
    <li className="project-card bg-theme-neutral/25 z-0 mb-8 lg:mr-4 rounded-md flex flex-col overflow-hidden shadow-md ease-in duration-300">
      <div className="flex w-full">
        <div className="w-3/5 bg-theme-accent text-center p-2 rounded-br-md">
          {title}
        </div>
        <div className="flex items-center w-2/5 justify-start font-bold font-sans">
          <a
            rel="noreferrer"
            target="blank"
            href={githubHREF && githubHREF}
            title="repository"
            aria-label={
              githubHREF
                ? `Visit the ${title} github repository.`
                : `This is a private repository.`
            }
            className="group"
          >
            <GithubIcon
              size={ICON_SIZE}
              opacity={githubHREF ? 1 : 0.25}
              className="ml-3"
            />
          </a>
          <a
            rel="noreferrer"
            target={siteHREF === "#" ? "_self" : "_blank"}
            href={siteHREF && siteHREF}
            title="application"
            aria-label={
              siteHREF
                ? `Visit the ${title} live application`
                : `This project is not active`
            }
            className="group"
          >
            <AppIcon
              size={ICON_SIZE}
              opacity={siteHREF ? 1 : 0.25}
              className="ml-3"
            />
          </a>
        </div>
      </div>

      <div className="flex w-full justify-between grow pointer-events-none">
        <div className="w-3/5 p-3 flex items-center justify-center">
          <img
            src={`/desktop-${title
              .replace("'", "")
              .replace(" ", "-")
              .toLowerCase()}.webp`}
            width={projectImageSize}
            height={projectImageSize}
            alt=""
          ></img>
        </div>

        <div className="w-1/3 flex">
          <ul className="w-1/2 bg-theme-accent ml-auto rounded-tl-3xl flex flex-col justify-start items-center p-2 relative">
            {techStack.map((techName, i) => (
              <li key={i} className="my-1 relative flex justify-start">
                <figure aria-label={techName}>{techIconMap[techName]}</figure>
                <p className="bg-gradient-to-r from-theme-accent from-25% to-theme-primary shadow-md w-fit h-full absolute top-0 -z-10 pl-1.5 pr-40 rounded-l-sm flex items-center text-xs font-bold font-sans transition-all duration-300 hover:-ml-[5.5rem] pointer-events-auto">
                  {techName}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
}

export default ProjectCard;
