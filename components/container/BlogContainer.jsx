import Image from "next/image";
import { parseISO, format } from "date-fns";
import Container from "./Container";
import EditPost from "../edit-post/EditPost";
import { ShareButton, TwitterShare } from "../share-button/ShareButton";

const editUrl = (slug) =>
  `https://github.com/yanuwarishak/yanuwarishak.space/edit/main/data/blog/${slug}.mdx`;

export default function BlogContainer({ slug, post, children }) {
  return (
    <Container
      title={`${post.title} – Yanuwar Ishak`}
      description={post.summary}
      image={`https://yanuwarishak.space${post.image}`}
      date={new Date(post.publishedAt).toISOString()}
      type="article"
    >
      <div className="w-full flex flex-col items-start justify-center gap-6">
        <h1 className=" text-3xl md:leading-tight md:text-5xl font-bold">
          {post.title}
        </h1>
        <div className="flex flex-row w-full items-center justify-between">
          <div className="flex flex-row gap-3">
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
                {format(parseISO(post.publishedAt), "dd MMMM yyyy")}
              </span>
            </p>
          </div>
          <div className="flex flex-row gap-2">
            <ShareButton
              title={post.title}
              text={post.summary}
              url={`https://yanuwarishak.space/blog/${slug}`}
            />
            <TwitterShare
              title={post.title}
              summary={post.summary}
              url={`https://yanuwarishak.space/blog/${slug}`}
            />
          </div>
        </div>
        <div className="relative w-full h-80">
          <Image
            className="rounded-lg"
            alt={post.title}
            src={post.image}
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
        <section className="prose w-full max-w-none">{children}</section>
        <div className="flex flex-row justify-end w-full -mb-4">
          <EditPost url={editUrl(slug)} />
        </div>
      </div>
    </Container>
  );
}
