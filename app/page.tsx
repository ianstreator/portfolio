import { WakaTimeData } from "../types";
import projects from "./data/projectData";
import Image from "next/image";
import { contactIconMap } from "./utils/reactIcons";

import ProjectCard from "./components/ProjectCard";
import WakaTimeCard from "./components/WakaTimeCard";

export default async function Home() {
  const languageData = (await fetchWakaTimeData()).filter((_, i) => i < 3);
  const footerImgSize = 300;
  const avatarImgSize = 250;

  const contactItems = [
    {
      name: "Email",
      href: "mailto: ianstreator@gmail.com",
      aria: "Click here to send Ian an email.",
      icon: contactIconMap.email,
    },
    {
      name: "GitHub",
      href: "https://github.com/ianstreator",
      aria: "Click here to visit Ian's GitHub in a new tab.",
      icon: contactIconMap.github,
    },
    {
      name: "Resume",
      href: "/resume.pdf",
      aria: "Click here to open Ian's resume in a new tab.",
      icon: contactIconMap.resume,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/ian-streator-4195021a7/",
      aria: "Click here to visit Ian's LinkedIn in a new tab.",
      icon: contactIconMap.linkedin,
    },
  ];

  return (
    <main className="flex min-h-screen bg-gradient-to-b from-theme-primary to-theme-secondary flex-col items-center overflow-hidden">
      <header className="w-full h-32 my-4 mb-8 lg:mb-4 items-center overflow-visible flex bg-gradient-to-r from-theme-neutral/25 from-50% to-theme-neutral/0">
        <div className="rounded-full overflow-hidden -ml-10">
          <img
            src="/profile.webp"
            alt="profile"
            width={avatarImgSize}
            height={avatarImgSize}
          />
        </div>

        <div className="w-fit p-8 pl-4">
          <h1 className="text-4xl w-fit">Ian Streator</h1>
          <p className="font-bold font-sans">Software Developer</p>
        </div>
      </header>

      <div className="p-4 pb-0">
        <section className="justify-between flex flex-col lg:flex-row lg:w-full">
          {languageData.length ? (
            <article className="p-8 pb-4 flex flex-col">
              <h2 className="text-4xl w-fit pb-4">7 day IDE activity</h2>

              <WakaTimeCard languages={languageData} />
            </article>
          ) : null}

          <article className="flex flex-col p-8 pb-4">
            <h1 className="text-4xl w-fit pb-4">Projects</h1>

            <ul className="flex flex-col lg:flex-wrap lg:flex-row lg:max-w-xs xl:max-w-2xl 2xl:max-w-5xl">
              {projects.map((project, i) => (
                <ProjectCard key={i} {...project} />
              ))}
            </ul>
          </article>
        </section>

        <footer className="px-8 flex flex-col justify-center lg:flex-row-reverse lg:justify-between">
          <ul className="flex w-full justify-between pb-8 lg:items-end lg:flex-col lg:w-1/3">
            {contactItems.map(({ name, href, icon, aria }, i) => (
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
                  className="bg-theme-neutral/25 rounded-full w-fit mb-2 lg:mx-4 justify-center"
                >
                  {icon}
                </a>
                <p>{name}</p>
              </li>
            ))}
          </ul>

          <figure className="flex items-center justify-center lg:justify-start">
            <Image
              className="lg:w-full"
              src="/footer-art.svg"
              width={footerImgSize}
              height={footerImgSize}
              alt="footer-art"
            ></Image>
          </figure>
        </footer>
      </div>
    </main>
  );
}

const fetchWakaTimeData = async () => {
  const controller = new AbortController();
  const BASE_URL = "https://wakatime.com/api/v1/";
  const WAKATIME_KEY = process.env.WAKA_TIME_SECRET_KEY;
  setTimeout(() => controller.abort(), 5000);
  try {
    const wakaTimeRes = await fetch(
      `${BASE_URL}users/Ian19/stats/last_7_days?api_key=${WAKATIME_KEY}`,
      {
        signal: controller.signal,
        next: {
          revalidate: 3600,
        },
      }
    );
    const {
      data: { languages },
    } = (await wakaTimeRes.json()) as WakaTimeData;

    return languages;
  } catch (error) {
    throw error;
  }
};
