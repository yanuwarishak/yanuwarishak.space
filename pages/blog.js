import Image from "next/image";
import { getAllPosts } from "utils/getLocalData";

import PostList from "@/components/post-list/PostList";

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


export default function Blog({ posts }) {
  return (
    <MainLayout
      title="Blog – Yanuwar Ishak"
      LeftContent={leftContent}
      RightContent={rightContent}
    >
      {/* Page Header */}
      <div className="w-full flex flex-col md:flex-row justify-between md:items-start gap-6">
        <div className="w-full h-full md:w-2/5 flex flex-col justify-start">
          <span className="flex flex-col">
            <p className="text-xl font-bold text-[#3f3f3f] ml-2">/ ブログ</p>
            <h1 className="text-5xl font-bold">Blog </h1>
          </span>
          <p className="mt-2 text-gray-400 leading-relaxed">
            Some article I wrote over the course of my developer journey.
          </p>
        </div>
        <div className="flex flex-col text-center gap-2 w-full md:w-3/5">
          <div className="h-48 w-full relative">
            <Image
              src="/assets/images/writing-image.jpg"
              layout="fill"
              objectFit="cover"
              alt="A photo of pen and paper"
              priority
            />
          </div>
          <p className="text-xs text-gray-400">
            Photo by Ferenc Jan Kahánek on{" "}
            <a
              href="https://unsplash.com/photos/g3O5ZtRk2E4"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Unsplash
            </a>
          </p>
        </div>
      </div>

      {/* Page Content */}
      <div className="flex flex-col gap-4">
        {posts.map((post, idx) => (
          <PostList posts={post} key={idx} />
        ))}
      </div>
    </MainLayout>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts("data/blog");

  return {
    props: {
      posts,
    },
  };
}
