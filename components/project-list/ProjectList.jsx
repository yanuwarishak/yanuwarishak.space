import Link from 'next/link'
import Image from 'next/image'

export default function ProjectList({ project }) {
  return (
    <div className="flex flex-col bg-[#1d1d1d] rounded-md relative" key={project.title}>
      <p className="absolute top-2 right-2 text-gray-100 py-1 px-2 bg-purple-600 font-semibold rounded-xl text-sm z-10 select-none cursor-default">
        {project.category[1]}
      </p>
      <Link href={`/project/${project.slug}`}>
        <div className="relative w-full h-48">
          <Image
            className="cursor-pointer"
            width={250}
            height={250}
            src={project.image}
            alt={project.title}
            // style={{ objectFit: "cover" }}
            sizes="92vw, min-width(640px) 360px"
          />
        </div>
      </Link>
      <div className="flex flex-col w-full p-2 py-3 rounded-b-xl cursor-default overflow-hidden">
        <div className="flex flex-row mb-2 justify-between w-full">
          <div>
            <p className="text-sm py-1 text-gray-400">{project.category[0]}</p>
          </div>
          <div className="flex flex-row gap-1 flex-wrap justify-end w-3/5">
            {project.techs.map((tech) => (
              <p
                className="bg-[#303030] rounded-md text-xs leading-6 px-1 h-[fit-content]"
                key={project.title + tech}
              >
                {tech}
              </p>
            ))}
          </div>
        </div>
        <h2 className="mb-1 font-medium text-lg text-gray-200 ">
          <Link
            href={`/project/${project.slug}`}
            className="hover:text-purple-500 hover:underline overflow-ellipsis"
          >
            {project.title}
          </Link>
        </h2>
        <p className="text-gray-400">{project.excerpt}</p>
      </div>
    </div>
  )
}
