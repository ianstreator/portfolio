import Image from "next/image";
import ProjectCard from "./components/ProjectCard";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-gradient-to-b from-primary to-secondary flex-col items-center">
      <div className="w-full pt-4">
        <div className="bg-gradient-to-r from-neutral/25 to-neutral/0 px-4 py-3">
          <h1 className="text-4xl">Ian Streator</h1>
        </div>
        <h1 className="text-4xl px-4 py-3">Web Developer</h1>
      </div>

      <div className="md:main-cards-container">
        {/*MAIN CARDS CONTAINER*/}

        <div className="waka-card p-8">
          {/*WAKA CARD CONTAINER*/}

          <h1 className="text-4xl w-full pb-4">7 day IDE activity</h1>

          <div className="bg-neutral/25 w-full h-full flex waka-card rounded-md p-3">
            {/*GRADIENT AND STATS CONTAINER*/}
            <div>
              <div></div> {/*GRADIENT*/}
              <div>
                {/*STATS*/}
                {}
              </div>
            </div>
          </div>
        </div>

        <div className="project-card p-8  md:project-cards-container">
          {/*PROJECT CARDS CONTAINER*/}

          <h1 className="text-4xl w-full pb-4">Projects</h1>

          <div className="flex flex-col justify-around">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>
        </div>
      </div>

      <div>
        {/*FOOTER CONTACT AND ART CONTAINER*/}

        <div>{/*CONTACT CONTAINER*/}</div>

        <div>{/*ART CONTAINER*/}</div>
      </div>
    </main>
  );
}
