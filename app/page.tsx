import { WakaData } from "../types";
import projects from "./data/projectData";
import Image from "next/image";
import { AiFillGithub } from "react-icons/ai";
import { MdOutlineEmail } from "react-icons/md";
import { BsFiletypePdf } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

import ProjectCard from "./components/ProjectCard";
import WakaCard from "./components/WakaCard";

export default async function Home() {
  const languageData = await fetchWakaTimeData();
  const contactIconSize = 30;
  const footerArtSize = 300;

  const contactItems = [
    {
      name: "Email",
      element: <MdOutlineEmail size={contactIconSize} className="m-3" />,
    },
    {
      name: "GitHub",
      element: <AiFillGithub size={contactIconSize} className="m-3" />,
    },
    {
      name: "Resume",
      element: <BsFiletypePdf size={contactIconSize} className="m-3" />,
    },
    {
      name: "LinkedIn",
      element: <FaLinkedinIn size={contactIconSize} className="m-3" />,
    },
  ];

  return (
    <main className="flex min-h-screen bg-gradient-to-b from-theme-primary to-theme-secondary flex-col items-center overflow-hidden">
      <div className="w-full mt-4 bg-gradient-to-r from-theme-neutral/25 to-theme-neutral/0">
        <div className="w-fit p-4">
          <h1 className="text-4xl w-fit">Ian Streator</h1>
          <p className="font-bold font-sans">Software Developer</p>
        </div>
      </div>

      <div className="p-4 pb-0">
        <div className="justify-between flex flex-col lg:flex-row lg:w-full">
          <div className="p-8">
            <h1 className="text-4xl w-fit pb-4">7 day IDE activity</h1>

            <WakaCard data={languageData} />
          </div>

          <div className="flex flex-col p-8">
            <h1 className="text-4xl w-fit pb-4">Projects</h1>

            <div className="flex flex-col lg:flex-wrap lg:flex-row lg:max-w-xs xl:max-w-2xl 2xl:max-w-5xl">
              {projects.map((project, i) => (
                <ProjectCard key={i} {...project} />
              ))}
            </div>
          </div>
        </div>

        <div className="p-8 pb-0 flex flex-col justify-center lg:flex-row-reverse lg:justify-between">
          <div className="flex w-full justify-between pb-8 lg:items-end lg:flex-col lg:w-1/3">
            {contactItems.map(({ name, element }, i) => (
              <div
                key={i}
                className="w-16 flex flex-col lg:w-fit lg:justify-start lg:flex-row-reverse justify-center items-center"
              >
                <div className="bg-theme-neutral/25 rounded-full w-fit mb-2 lg:mx-4 justify-center">
                  {element}
                </div>
                <p>{name}</p>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center lg:justify-start">
            <Image
              className="lg:w-full"
              src="/footer-art.svg"
              width={footerArtSize}
              height={footerArtSize}
              alt="footer-art"
            ></Image>
          </div>
        </div>
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
    const wakaRes = await fetch(
      `${BASE_URL}users/Ian19/stats/last_7_days?api_key=${WAKATIME_KEY}`,
      {
        signal: controller.signal,
      }
    );
    const wakaData = (await wakaRes.json()) as WakaData;
    return wakaData.data.languages;
  } catch (error) {
    throw error;
  }
};
