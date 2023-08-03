import { ProjectData } from "../../types";

const projects: ProjectData[] = [
  {
    title: "Weather Quote",
    description: "A location-based weather app that generates a unique quote",
    githubHREF: "https://github.com/ianstreator/next-weather",
    siteHREF: "https://next-weather-quote.vercel.app/",
    stack: ["Next", "Typescript", "Tailwind"],
  },
  {
    title: "Babble",
    description: "A chat app with a passive translation feature",
    githubHREF: "https://github.com/ianstreator/Babble",
    siteHREF: "https://i-babble.herokuapp.com/",
    stack: ["React", "Node", "Scss"],
  },
  {
    title: "Asset Manager",
    description: "A visual tool for managing my photo database in Redis",
    githubHREF: "https://github.com/ianstreator/photo-sort",
    siteHREF: undefined,
    stack: ["Next", "Typescript", "Scss"],
  },
  {
    title: "Git-Streaks",
    description:
      "A simple and visual way to track your GitHub contribution activity",
    githubHREF: "https://github.com/ianstreator/git-streaks",
    siteHREF: "https://git-streaks.vercel.app/",
    stack: ["React", "Tailwind"],
  },
  {
    title: "Joe's Pizza",
    description:
      "A menu and facility information app for an Italian pizza shop",
    githubHREF: "https://github.com/ianstreator/joes-pizza",
    siteHREF: "https://joes-pizza-schaumburg.vercel.app/",
    stack: ["Next", "Scss"],
  },
  {
    title: "Wikle",
    description: "A game where you traverse Wikipedia pages",
    githubHREF: undefined,
    siteHREF: "https://www.wikle.io/",
    stack: ["Next", "Scss"],
  },
];

export default projects;