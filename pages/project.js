import { useState } from "react";
import Image from "next/image";

import { getAllProjects } from "utils/getLocalData";

import ProjectList from "@/components/project-list/ProjectList";

import MainLayout from "layout/MainLayout";
import { SpotifyWrapper } from "hooks/context/state";
import SideNowPlaying from "@/components/spotify/SideNowPlaying";

function leftContent() {
  return null;
}

function rightContent() {
  return (
    <>
      <SpotifyWrapper>
        <SideNowPlaying />
      </SpotifyWrapper>
    </>
  );
}

export default function Project({ projects }) {
  const categories = [
    "Web",
    "Android",
    "UI/UX",
    "Work Project",
    "Learning Project",
  ];
  const [filter, setFilter] = useState("");
  const filteredProjects = projects.filter((project) =>
    project.category.includes(filter)
  );

  return (
    <MainLayout
      title="Project – Yanuwar Ishak"
      LeftContent={leftContent}
      RightContent={rightContent}
    >
      {/* Page Header */}
      <div className="w-full flex flex-col md:flex-row justify-between md:items-start gap-6">
        <div className="w-full h-full md:w-2/5 flex flex-col justify-start">
          <span className="flex flex-col">
            <p className="text-xl font-bold text-[#3f3f3f] ml-2">
              / プロジェクト
            </p>
            <h1 className="text-5xl font-bold">Project </h1>
          </span>
          <p className="mt-2 text-gray-500 leading-relaxed">
            Apart from being a Front-end Developer, I've done several works that
            put me in various roles (Graphic designer, video editor, Android
            Developer).
          </p>
        </div>
        <div className="flex flex-col text-center gap-2 w-full md:w-3/5">
          <div className="h-48 w-full relative">
            <Image
              src="/assets/images/code-vscode.jpg"
              layout="fill"
              objectFit="cover"
              alt="Writing code on VS Code"
              priority
            />
          </div>
          <p className="text-xs text-gray-400">
            Photo by Ferenc Almasi on{" "}
            <a
              href="https://unsplash.com/photos/eYpcLDXHVb0"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Unsplash
            </a>
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row">
        <p className="text-gray-200">Filter by:</p>
        <div className="mt-2 md:mt-0 md:ml-2 flex flex-row flex-wrap gap-2">
          {categories.map((category) => {
            return (
              <p
                className={`cursor-pointer px-2 select-none rounded-md ${
                  category == filter ? "bg-purple-600" : "bg-gray-800"
                }`}
                onClick={() =>
                  filter == category ? setFilter("") : setFilter(category)
                }
                key={category}
              >
                {category}
              </p>
            );
          })}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filteredProjects.map((project, idx) => {
          return <ProjectList project={project} key={idx} />;
        })}
        {!filteredProjects.length &&
          projects.map((project, idx) => {
            return <ProjectList project={project} key={idx} />;
          })}
      </div>
    </MainLayout>
  );
}

export function getStaticProps() {
  const projects = getAllProjects("data/project");

  return {
    props: {
      projects,
    },
  };
}
