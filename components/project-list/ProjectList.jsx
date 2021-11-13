import Link from "next/link";
import Image from "next/image";

export default function ProjectList({ project }) {
  return (
    <div
      className="flex flex-col mt-4 bg-[#202020] rounded-md relative"
      key={project.title}
    >
      <p className="absolute top-2 right-2 text-gray-100 py-1 px-2 bg-purple-500 font-semibold rounded-xl text-sm">
        {project.category}
      </p>
      <img src={project.image} alt={project.title} />
      <div className="flex flex-col w-full p-2 py-3 rounded-b-xl cursor-default">
        <div className="flex flex-row mb-2 justify-between w-full">
          <div>
            <p className="text-xs py-1 text-gray-400">{project.projectType}</p>
          </div>
          <div className="flex flex-row mr-[-2px]">
            {project.techs.map((tech) => (
              <p
                className="text-xs mr-1 p-1 bg-gray-700 rounded-md"
                key={project.title + tech}
              >
                {tech}
              </p>
            ))}
          </div>
        </div>
        <Link href={`/project/${project.slug}`}>
          <a className="w-max">
            <h2 className="mb-1 font-medium text-lg text-gray-200 hover:text-purple-400 hover:underline">
              {project.title}
            </h2>
          </a>
        </Link>
        <p className="text-gray-400">{project.excerpt}</p>
      </div>
    </div>
  );
}
