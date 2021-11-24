import Image from "next/image";
import { parseISO, format } from "date-fns";
import Container from "./Container";
import EditPost from "../edit-post/EditPost";
import { ShareButton, TwitterShare } from "../share-button/ShareButton";

const editUrl = (slug) =>
  `https://github.com/yanuwarishak/yanuwarishak.space/edit/main/data/project/${slug}.mdx`;

export default function ProjectContainer({ slug, project, children }) {
  return (
    <Container
      title={`${project.title} – Yanuwar Ishak`}
      description={project.excerpt}
      image={`https://yanuwarishak.space${project.image}`}
      date={new Date(project.publishedAt).toISOString()}
      type="article"
    >
      <div className="w-full flex flex-col items-start justify-center gap-6">
        {/* Project Title */}
        <h1 className="text-3xl md:leading-tight md:text-5xl font-bold">
          {project.title}
        </h1>
        {/* Post detail */}
        <div className="flex flex-row justify-start gap-3">
          <div className="my-auto h-6">
            <Image
              className="rounded-full"
              src="/assets/images/avatar.png"
              width={24}
              height={24}
              priority
            />
          </div>
          <p className="text-gray-200">
            Yanuwar Ishak /{" "}
            <span className="text-gray-400">
              {project.category[0]} /{" "}
              {format(parseISO(project.publishedAt), "MMMM yyyy")}
            </span>
          </p>
        </div>
        {/* Tech stack and share button */}
        <div className="flex flex-row w-full justify-between items-center gap-2">
          <div className="flex flex-row flex-wrap gap-2">
            {project.techs.map((tech) => (
              <p key={tech} className="px-2 rounded-md bg-gray-800">
                {tech}
              </p>
            ))}
          </div>
          <div className="flex flex-row gap-2 flex-wrap">
            <ShareButton
              title={project.title}
              text={project.excerpt}
              url={`https://yanuwarishak.space/project/${slug}`}
            />
            <TwitterShare
              title={project.title}
              summary={project.excerpt}
              url={`https://yanuwarishak.space/project/${slug}`}
            />
          </div>
        </div>
        {/* Project Thumbnail */}
        <div className="relative w-full h-80">
          <Image
            className="rounded-lg"
            alt={project.title}
            src={project.image}
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
        {/* Article */}
        <section className="prose w-full max-w-none">{children}</section>
        {/* Edit Button */}
        <div className="flex flex-row justify-end w-full -mb-4">
          <EditPost url={editUrl(slug)} />
        </div>
      </div>
    </Container>
  );
}
