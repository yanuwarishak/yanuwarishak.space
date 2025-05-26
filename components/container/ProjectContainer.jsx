import Image from "next/image";

import MainLayout from "layout/MainLayout";
import ContentNav from "../ContentNav";
import EditPost from "../edit-post/EditPost";
import { ShareButton, TwitterShare } from "../share-button/ShareButton";

const editUrl = (slug) =>
  `https://github.com/yanuwarishak/yanuwarishak.space/edit/main/data/project/${slug}.mdx`;

function leftContent() {
  return null;
}

export default function ProjectContainer({ slug, project, children }) {
  const options = {
    year: "numeric",
    month: "long",
  };

  const publishedAt = new Date(project.publishedAt).toLocaleString(
    "en-US",
    options,
  );

  return (
    <MainLayout
      title={`${project.title} – Yanuwar Ishak`}
      description={project.excerpt}
      image={`https://yanuwarishak.space${project.image}`}
      date={new Date(project.publishedAt).toISOString()}
      type="article"
      LeftContent={leftContent}
      RightContent={() => {
        return <ContentNav slug={`/project/${slug}`} />;
      }}
    >
      <div className="w-full flex flex-col items-start justify-center gap-6">
        {/* Project Informations */}
        <div className="w-full flex flex-col items-start justify-center gap-4">
          {/* Project Thumbnail */}
          <div className="relative w-full h-80">
            <Image
              width={50}
              height={50}
              className="rounded-lg"
              alt={project.title}
              src={project.image}
              layout="fill"
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
          {/* Post detail */}
          <div className="flex flex-row w-full items-center justify-between">
            <div className="flex flex-row gap-3">
              <div className="my-auto h-6">
                <Image
                  className="rounded-full"
                  src="/assets/images/avatar.webp"
                  width={24}
                  height={24}
                  priority
                />
              </div>
              <p className="text-gray-200">
                Yanuwar Ishak /{" "}
                <span className="text-gray-400">
                  {project.category[0]} / {publishedAt}
                </span>
              </p>
            </div>
          </div>
          {/* Project Title */}
          <h1 className="text-3xl md:text-5xl font-bold -mt-1">
            {project.title}
          </h1>
          {/* Tech stack and share button */}
          <div className="flex flex-row w-full justify-between items-center gap-2">
            <div className="flex flex-row flex-wrap gap-2">
              {project.techs.map((tech) => (
                <p
                  key={tech}
                  className="px-2 py-1 rounded-md bg-gradient-to-r from-gray-800 to-gray-900"
                >
                  #{tech}
                </p>
              ))}
            </div>
          </div>
        </div>
        {/* Article */}
        <section className="prose w-full max-w-none">{children}</section>
        {/* Edit Button */}
        <div className="flex flex-row justify-between items-center w-full -mb-4">
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
          <EditPost url={editUrl(slug)} />
        </div>
      </div>
    </MainLayout>
  );
}
