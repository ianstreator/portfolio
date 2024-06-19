import { ProjectData } from "../../types";
import { technologies } from "../utils/technologyConstants";

const projects: ProjectData[] = [
  {
    title: "JummJumm",
    description:
      "A Product catalog application with shopping cart and list generation features.",
    githubHREF: "https://github.com/ianstreator/jumm-jumm",
    siteHREF: "https://www.jummjumm.com/",
    techStack: [
      technologies.next.displayName,
      technologies.typescript.displayName,
      technologies.tailwind.displayName,
    ],
  },
  {
    title: "Geocast",
    description:
      "A location-based weather application, served with an photo and qoute.",
    githubHREF: "https://github.com/ianstreator/geocast",
    siteHREF: "https://geocast.vercel.app/",
    techStack: [
      technologies.next.displayName,
      technologies.typescript.displayName,
      technologies.tailwind.displayName,
    ],
  },
  // {
  //   title: "Babble",
  //   description: "A chat app with a passive translation feature",
  //   githubHREF: "https://github.com/ianstreator/Babble",
  //   siteHREF: "https://i-babble.herokuapp.com/",
  //   techStack: [Tech.React, Tech.Node, Tech.Scss],
  // },
  // {
  //   title: "Asset Manager",
  //   description: "A visual tool for managing my photo database in Redis",
  //   githubHREF: "https://github.com/ianstreator/photo-sort",
  //   techStack: [Tech.Next, Tech.Typescript, Tech.Scss],
  // },
  {
    title: "Git Streaks",
    description:
      "An application for tracking consecutive day streaks of GitHub contributions.",
    githubHREF: "https://github.com/ianstreator/git-streaks",
    siteHREF: "https://gitstreaks.com",
    techStack: [
      technologies.react.displayName,
      technologies.tailwind.displayName,
      technologies.daisyui.displayName,
    ],
  },
  // {
  //   title: "Joe's Pizza",
  //   description:
  //     "A menu and facility information app for an Italian pizza shop",
  //   githubHREF: "https://github.com/ianstreator/joes-pizza",
  //   siteHREF: "https://joes-pizza-schaumburg.vercel.app/",
  //   techStack: [Tech.Next, Tech.Scss],
  // },
  {
    title: "Wikle",
    description:
      "A game where you traverse Wikipedia from point A to point B as fast and in as few moves as possible.",
    siteHREF: "https://www.wikle.io/",
    techStack: [
      technologies.next.displayName,
      technologies.scss.displayName,
      technologies.mongodb.displayName,
    ],
  },
  {
    title: "Portfolio",
    description: "Ian Streator's portfolio of software projects.",
    githubHREF: "https://github.com/ianstreator/portfolio",
    techStack: [
      technologies.next.displayName,
      technologies.typescript.displayName,
      technologies.tailwind.displayName,
    ],
  },
];

export default projects;
