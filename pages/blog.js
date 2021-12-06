import { useState } from "react";
import Image from "next/image";
import { getAllPosts } from "utils/getLocalData";

import PostList from "@/components/post-list/PostList";

import MainLayout from "layout/MainLayout";
import { SpotifyWrapper } from "hooks/context/state";
import SideNowPlaying from "@/components/spotify/SideNowPlaying";

import headerImage from "../public/assets/images/blog-banner.jpg";

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
  const [keywords, setKeywords] = useState("");
  const filteredPosts = posts.filter((post) =>
    post.frontmatter.title.toLowerCase().includes(keywords.toLowerCase())
  );
  return (
    <MainLayout
      title="Blog – Yanuwar Ishak"
      LeftContent={leftContent}
      RightContent={rightContent}
    >
      {/* Page Header */}
      <div className="w-full flex flex-col-reverse xs:flex-row justify-between md:items-start gap-6">
        <div className="w-full h-full md:w-2/5 flex flex-col justify-start">
          <span className="flex flex-col">
            <p className="text-xl font-bold text-[#616161] ml-2">/ ブログ</p>
            <h1 className="text-5xl font-bold">Blog </h1>
          </span>
          <p className="mt-2 text-gray-400 leading-relaxed">
            Some article I wrote over the course of my developer journey.
          </p>
        </div>
        <div className="flex flex-col text-center gap-2 w-full md:w-3/5">
          <div className="h-48 w-full relative">
            <Image
              src={headerImage}
              layout="fill"
              objectFit="cover"
              alt="A photo of pen and paper"
              placeholder="blur"
              priority
            />
          </div>
          <p className="text-xs text-gray-400">
            Photo by Jan Kahánek on{" "}
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
      {/* Search bar */}
      <div className="flex flex-col gap-2 bg-[#121212]">
        <p className="text-gray-400">Search by Title</p>
        <div className="relative w-full mb-4">
          <input
            aria-label="Articles title"
            type="text"
            onChange={(e) => setKeywords(e.target.value)}
            placeholder="Search..."
            className="block w-full px-4 py-2 border rounded-md border-gray-900 focus:ring-blue-600 focus:border-blue-500 bg-[#292929] text-gray-100"
          />
          <svg
            className="absolute w-5 h-5 right-3 top-3 text-gray-300"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>
      {/* Page Content */}
      <div className="flex flex-col gap-2">
        {!filteredPosts.length && (
          <p className="mb-4 text-gray-600 dark:text-gray-400">
            No posts found.
          </p>
        )}
        {filteredPosts.map((post, idx) => (
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
