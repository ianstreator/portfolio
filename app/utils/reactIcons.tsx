import { BsFiletypePdf as ResumeIcon } from "react-icons/bs";
import {
  AiFillGithub as GitHubIcon,
  AiOutlineMail as EmailIcon,
} from "react-icons/ai";
import {
  TbBrandTypescript as TypeScriptIcon,
  TbBrandNextjs as NextIcon,
} from "react-icons/tb";
import {
  BiLogoTailwindCss as TailwindIcon,
  BiLogoVisualStudio as VScodeIcon,
  BiLogoMongodb as MongodbIcon,
} from "react-icons/bi";
import {
  SiContentful as ContentfulIcon,
  SiPostgresql as PostgresqlIcon,
  SiDaisyui as DaisyuiIcon,
  SiPostman as PostmanIcon,
  SiDocker as DockerIcon,
  SiRedis as RedisIcon,
  SiJest as JestIcon,
} from "react-icons/si";
import {
  FaLinkedinIn as LinkedInIcon,
  FaReact as ReactIcon,
  FaFigma as FigmaIcon,
  FaNodeJs as NodeIcon,
  FaGitAlt as GitIcon,
  FaSass as SassIcon,
  FaJava as JavaIcon,
} from "react-icons/fa";
import { IconType } from "react-icons";
const importMap: { [key: string]: IconType } = {
  ContentfulIcon,
  PostgresqlIcon,
  TypeScriptIcon,
  LinkedInIcon,
  TailwindIcon,
  DaisyuiIcon,
  PostmanIcon,
  MongodbIcon,
  VScodeIcon,
  ResumeIcon,
  GitHubIcon,
  DockerIcon,
  ReactIcon,
  FigmaIcon,
  RedisIcon,
  EmailIcon,
  NodeIcon,
  SassIcon,
  JavaIcon,
  NextIcon,
  JestIcon,
  GitIcon,
};
import { assetProps } from "./technologyConstants";
export const ICON_SIZE = 30;
type IconMap = {
  [name: string]: React.JSX.Element;
};
export const iconMap: IconMap = Object.keys(importMap).reduce((acc, icon) => {
  const normalizedName = icon.toLowerCase().replace("icon", "");
  const {
    displayName,
    hexColor,
    strokeWidth = 0.01,
  } = assetProps[normalizedName];
  const IconElement = importMap[icon];
  return {
    ...acc,
    [displayName]: (
      <IconElement
        size={ICON_SIZE}
        color={hexColor}
        strokeWidth={strokeWidth}
      />
    ),
  };
}, {});
