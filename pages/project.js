import { useState } from "react";

import { getAllProjects } from "utils/getAllProjects";

import ProjectList from "@/components/project-list/ProjectList";
import Container from "@/components/container/Container";

export default function Project({ projects }) {
  const [categories, setCategories] = useState({
    Web: false,
    Android: false,
    "UI/UX": false,
    "Work Project": false,
    "Learning Project": false,
  });
  const filteredProjects = projects.filter(
    (project) =>
      categories[project.category] == true ||
      categories[project.projectType] == true
  );

  return (
    <Container title="Project – Yanuwar Ishak">
      <div className="absolute top-0 left-0 ">
        <p className="p-6 font-semibold text-lg md:hidden">Project</p>
      </div>
      <div className="w-full">
        <div className="flex flex-col">
          <div className="flex flex-col mb-10">
            <h1 className="text-5xl font-bold mb-2">Project</h1>
            <p className=" pt-4 text-gray-400">
              Apart from being a Front-end Developer, in the span of 4 years
              learning at my University, I've done several works that put me in
              different roles. There was a period of time where I mostly worked
              as a graphic designer and a video editor. I've also done some
              project as an Android Developer. In between that period I'm also
              taking some time learning about UI and UX Design.
            </p>
          </div>
          <div className="flex flex-row mb-4">
            <p className="mr-2 text-gray-200">Filter by:</p>
            {Object.keys(categories).map((category) => {
              const currCtg = category;
              return (
                <p
                  className={`cursor-pointer px-2 mr-2 rounded-md ${
                    categories[currCtg] ? "bg-gray-800" : "bg-gray-700"
                  }`}
                  onClick={() =>
                    setCategories({
                      ...categories,
                      [currCtg]: !categories[currCtg],
                    })
                  }
                  key={category}
                >
                  {category}
                </p>
              );
            })}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5">
            {filteredProjects.map((project, idx) => {
              return <ProjectList project={project} key={idx} />;
            })}
            {!filteredProjects.length &&
              projects.map((project, idx) => {
                return <ProjectList project={project} key={idx} />;
              })}
          </div>
        </div>
      </div>
    </Container>
  );
}

export function getStaticProps() {
  const projects = getAllProjects();
  return {
    props: {
      projects,
    },
  };
}
