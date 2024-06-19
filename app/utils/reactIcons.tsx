import {
  FaReact as ReactIcon,
  FaSass as SassIcon,
  FaNodeJs as NodeIcon,
  FaJava as JavaIcon,
} from "react-icons/fa";
import {
  TbBrandNextjs as NextIcon,
  TbBrandTypescript as TypeScriptIcon,
} from "react-icons/tb";

import {
  BiLogoTailwindCss as TailwindIcon,
  BiLogoMongodb as MongodbIcon,
} from "react-icons/bi";
import { SiDaisyui as DaisyuiIcon } from "react-icons/si";
import { technologies } from "./technologyConstants";

import { AiFillGithub as GitHubIcon } from "react-icons/ai";
import { MdOutlineEmail as EmailIcon } from "react-icons/md";
import { BsFiletypePdf as ResumeIcon } from "react-icons/bs";
import { FaLinkedinIn as LinkedInIcon } from "react-icons/fa";

type IconMap = {
  [name: string]: React.JSX.Element;
};
export const ICON_SIZE = 30;

export const contactIconMap: IconMap = {
  email: <EmailIcon size={ICON_SIZE} className="m-3" />,
  github: <GitHubIcon size={ICON_SIZE} className="m-3" />,
  resume: <ResumeIcon size={ICON_SIZE} className="m-3" />,
  linkedin: <LinkedInIcon size={ICON_SIZE} className="m-3" />,
};
export const techIconMap: IconMap = {
  [technologies.next.displayName]: (
    <NextIcon
      size={ICON_SIZE}
      color={technologies.next.hexColor}
      strokeWidth={1}
    />
  ),
  [technologies.react.displayName]: (
    <ReactIcon size={ICON_SIZE} color={technologies.react.hexColor} />
  ),
  [technologies.tailwind.displayName]: (
    <TailwindIcon size={ICON_SIZE} color={technologies.tailwind.hexColor} />
  ),
  [technologies.node.displayName]: (
    <NodeIcon size={ICON_SIZE} color={technologies.node.hexColor} />
  ),
  [technologies.scss.displayName]: (
    <SassIcon size={ICON_SIZE} color={technologies.scss.hexColor} />
  ),
  [technologies.typescript.displayName]: (
    <TypeScriptIcon
      size={ICON_SIZE}
      color={technologies.typescript.hexColor}
      strokeWidth={1}
    />
  ),
  [technologies.java.displayName]: (
    <JavaIcon size={ICON_SIZE} color={technologies.java.hexColor} />
  ),
  [technologies.mongodb.displayName]: (
    <MongodbIcon size={ICON_SIZE} color={technologies.mongodb.hexColor} />
  ),
  [technologies.daisyui.displayName]: (
    <DaisyuiIcon size={ICON_SIZE} color={technologies.daisyui.hexColor} />
  ),
};
