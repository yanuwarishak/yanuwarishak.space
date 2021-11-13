import Image from "next/image";
import { parseISO, format } from "date-fns";
import Container from "./Container";
import EditPost from "../edit-post/EditPost";

const editUrl = (slug) =>
  `https://github.com/yanuwarishak/yanuwarishak.space/edit/main/data/project/${slug}.mdx`;

export default function ProjectContainer({ slug, project, children }) {
  return (
    <Container
      title={`${project.title} – Yanuwar Ishak`}
      description={project.excerpt}
      image={`https://yanuwarishak.space${project.image}`}
      date={new Date(project.finishedAt).toISOString()}
      type="article"
    >
      <article className="w-full flex flex-col items-start justify-center">
        <h1 className="text-5xl mb-6 font-bold">{project.title}</h1>
        <div className="flex flex-row items-center w-full mb-6 justify-between">
          <div className="flex flex-row">
            <Image
              className="rounded-full"
              src="/assets/images/avatar.png"
              width={24}
              height={24}
            />
            <p className="text-gray-400 ml-2">
              <span className="text-gray-200">Yanuwar Ishak</span> &#183;{" "}
              {project.projectType} &#183;{" "}
              {format(parseISO(project.finishedAt), "dd MMMM yyyy")}
            </p>
          </div>
          <div className="flex flex-row">
            <div className="flex flex-row">
              {project.techs.map((tech) => (
                <p
                  key={tech}
                  className="p-[2px] px-2 mr-2 rounded-md bg-gray-800"
                >
                  {tech}
                </p>
              ))}
            </div>
            <a
              className="flex flex-row justify-end my-auto"
              target="_blank"
              rel="norefferer noopener"
              href={`https://twitter.com/intent/tweet?text=${project.title} - by Yanuwar Ishak. ${project.excerpt} https://yanuwarishak.space/project/${slug}`}
              data-size="large"
            >
              <svg
                className="filter invert hover:invert-[0.75]"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
          </div>
        </div>
        <Image
          alt={project.title}
          src={project.image}
          width={1366}
          height={768}
        />
        <section className="mt-8 prose w-full max-w-none">{children}</section>
        <EditPost url={editUrl(slug)} />
      </article>
    </Container>
  );
}
