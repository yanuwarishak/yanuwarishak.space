import Image from "next/image";

import MainLayout from "layout/MainLayout";
import ContentNav from "../ContentNav";
import EditPost from "../edit-post/EditPost";
import { ShareButton, TwitterShare } from "../share-button/ShareButton";

const editUrl = (slug) =>
  `https://github.com/yanuwarishak/yanuwarishak.space/edit/main/data/blog/${slug}.mdx`;

function leftContent() {
  return null;
}

export default function BlogContainer({ slug, post, children }) {
  const options = {
    day: "numeric",
    year: "numeric",
    month: "long",
  };
  const publishedAt = new Date(post.publishedAt).toLocaleString(
    "en-US",
    options
  );
  return (
    <MainLayout
      title={`${post.title} – Yanuwar Ishak`}
      description={post.summary}
      image={`https://yanuwarishak.space${post.image}`}
      date={new Date(post.publishedAt).toISOString()}
      type="article"
      LeftContent={leftContent}
      RightContent={() => {
        return <ContentNav slug={`/blog/${slug}`} />;
      }}
    >
      <div className="w-full flex flex-col items-start justify-center gap-6">
        {/* Post Thumbnail */}
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
        {/* Post Information */}
        <div className="flex flex-row w-full items-center justify-between">
          {/* Written by */}
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
              <span className="text-gray-400">{publishedAt}</span>
            </p>
          </div>
        </div>
        {/* Post Title */}
        <h1 className=" text-3xl md:leading-tight md:text-5xl font-bold">
          {post.title}
        </h1>
        {/* Post Content */}
        <section className="prose w-full max-w-none">{children}</section>
        {/* Post Edit Button */}
        <div className="flex flex-row justify-between items-center w-full -mb-4">
          {/* Share Btns */}
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
          <EditPost url={editUrl(slug)} />
        </div>
      </div>
    </MainLayout>
  );
}
