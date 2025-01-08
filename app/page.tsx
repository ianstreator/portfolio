import Image from "next/image";

import { WakaTimeData, WakaTimeLanguages } from "../types";
import { iconMap } from "./utils/reactIcons";
import { assetProps } from "./utils/technologyConstants";
import projects from "./data/projectData";

import ProjectCard from "./components/ProjectCard";
import WakaTimeCard from "./components/WakaTimeCard";

let exmapleLanguages: WakaTimeLanguages;
if (process.env.NODE_ENV === "development")
  exmapleLanguages = require("./data/wakatime.json");

const FOOTER_ART_PX_SIZE = 300;
const PROFILE_PICTURE_PX_SIZE = 250;

const FOOTER_CONTACT_ITEMS = [
  {
    name: "Email",
    href: "mailto: ianstreator@gmail.com",
    aria: "Click here to send Ian an email.",
  },
  {
    name: "GitHub",
    href: "https://github.com/ianstreator",
    aria: "Click here to visit Ian's GitHub in a new tab.",
  },
  {
    name: "Resume",
    href: "/resume.pdf",
    aria: "Click here to open Ian's resume in a new tab.",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/ian-streator-4195021a7/",
    aria: "Click here to visit Ian's LinkedIn in a new tab.",
  },
];

const TOOLKIT_ICONS = [
  assetProps.figma,
  assetProps.vscode,
  assetProps.docker,
  assetProps.postman,
  assetProps.git,
  assetProps.contentful,
];

export default async function Home() {
  let languageData = (await fetchWakaTimeData()).filter((_, i) => i < 3);
  return (
    <main className="flex min-h-screen bg-gradient-to-b from-theme-primary to-theme-secondary flex-col items-center overflow-hidden">
      <header className="w-full h-32 my-4 mb-8 lg:mb-4 items-center overflow-visible flex bg-gradient-to-r from-theme-neutral/25 from-50% to-theme-neutral/0">
        <div className="rounded-full overflow-hidden -ml-10">
          <Image
            src="/profile.webp"
            alt="profile"
            width={PROFILE_PICTURE_PX_SIZE}
            height={PROFILE_PICTURE_PX_SIZE}
          />
        </div>

        <div className="w-fit p-8 pl-4">
          <h1 className="text-4xl w-fit">Ian Streator</h1>
          <p className="font-bold font-sans">Software Developer</p>
        </div>
      </header>

      <div className="p-4 pb-0 flex flex-col items-center justify-center">
        <section className="justify-between flex flex-col lg:w-full items-center max-w-[1200px]">
          <section className="flex flex-col md:flex-row justify-between max-w-[1200px]">
            <article className="flex flex-col p-8 pb-4">
              <h2 className="text-4xl w-fit pb-4">Toolkit</h2>
              <div className="p-4 flex flex-wrap justify-start container-width">
                {TOOLKIT_ICONS.map(({ displayName }, i) => {
                  return (
                    <div
                      key={i}
                      className="flex flex-col items-center m-1 min-w-fit w-16 h-16"
                    >
                      <span className="">{iconMap[displayName]}</span>
                      <p className="text-xs pt-2">{displayName}</p>
                    </div>
                  );
                })}
              </div>
            </article>
            {languageData.length ? (
              <article className="flex flex-col p-8 pb-4">
                <h2 className="text-4xl w-fit pb-4">IDE activity</h2>

                <WakaTimeCard languages={languageData} />
              </article>
            ) : null}
          </section>

          <article className="flex flex-col p-8 pb-4 px-12 lg:px-8 md:max-w-3xl">
            <h2 className="text-4xl w-fit pb-4">Projects</h2>

            <ul className="flex flex-col md:flex-wrap md:flex-row">
              {projects.map((project, i) => (
                <ProjectCard key={i} {...project} />
              ))}
            </ul>
          </article>
        </section>

        <footer className="px-8 flex flex-col justify-center lg:flex-row-reverse lg:justify-center">
          <ul className="flex w-full justify-between pb-8 lg:items-end lg:flex-col lg:w-1/3 container-width">
            {FOOTER_CONTACT_ITEMS.map(({ name, href, aria }, i) => (
              <li
                key={i}
                className="w-16 flex flex-col lg:w-fit lg:justify-start lg:flex-row-reverse justify-center items-center"
              >
                <a
                  rel="noreferrer"
                  target={href.includes("mailto:") ? "_self" : "_blank"}
                  href={href}
                  title={name}
                  aria-label={aria}
                  className="bg-theme-neutral/25 rounded-full w-fit mb-2 p-2 lg:mx-4 justify-center"
                >
                  {iconMap[name]}
                </a>
                <p>{name}</p>
              </li>
            ))}
          </ul>

          <figure className="flex items-center justify-center lg:justify-start">
            <Image
              className="lg:w-full"
              src="/footer-art.svg"
              width={FOOTER_ART_PX_SIZE}
              height={FOOTER_ART_PX_SIZE}
              alt="footer-art"
            ></Image>
          </figure>
        </footer>
      </div>
    </main>
  );
}

const fetchWakaTimeData = async () => {
  const WAKATIME_KEY = process.env.WAKA_TIME_SECRET_KEY;

  const WAKA_BASE_URL = "https://wakatime.com/api/v1/";
  const WAKA_ENDPOINT = `users/Ian19/stats/last_7_days?api_key=${WAKATIME_KEY}`;

  const controller = new AbortController();
  setTimeout(() => controller.abort(), 5000);

  try {
    const wakaTimeRes = await fetch(WAKA_BASE_URL + WAKA_ENDPOINT, {
      signal: controller.signal,
      next: {
        revalidate: 3600,
      },
    });
    let {
      data: { languages },
    }: WakaTimeData = await wakaTimeRes.json();

    return languages;
  } catch (error) {
    throw error;
  }
};
