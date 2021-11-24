import { useState } from "react";
import { getAllProjects } from "utils/getLocalData";

import ProjectList from "@/components/project-list/ProjectList";
import Container from "@/components/container/Container";

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
    <Container title="Project – Yanuwar Ishak">
      <div className="relative">
        <h1 className="text-5xl font-bold z-1">Project</h1>
        <p className="text-6xl sm:text-7xl font-bold text-[#202020] absolute -top-8 -left-6 z-[-1] cursor-default ">
          プロジェクト
        </p>
      </div>
      <p className="text-gray-400 leading-relaxed">
        Apart from being a Front-end Developer, I've done several works that put
        me in various roles. There was a period of time where I mostly worked as
        a graphic designer and a video editor. I've also done a project as an
        Android Developer.
      </p>
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
    </Container>
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
