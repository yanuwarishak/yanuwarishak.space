import Image from "next/image";
import Link from "next/link";
import { getAllPosts, getAllProjects } from "utils/getLocalData";

import PostList from "@/components/post-list/PostList";
import ProjectList from "@/components/project-list/ProjectList";

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

import {
  JavascriptIcon,
  ReactIcon,
  NextjsIcon,
  NodeIcon,
  SocialIcons,
} from "@/components/icons";

export default function Home({ recentPosts, recentProjects }) {
  const stacks = [
    <JavascriptIcon />,
    <ReactIcon />,
    <NextjsIcon />,
    <NodeIcon />,
  ];
  return (
    <MainLayout LeftContent={leftContent} RightContent={rightContent}>
      <div className="absolute top-0 left-0">
        <h1 className="p-6 font-semibold text-lg md:hidden">Home</h1>
      </div>
      {/* Site Update Section */}
      <div className="hidden md:flex flex-col p-4 bg-gradient-to-l from-gray-900 to-gray-800 rounded-md gap-2 cursor-default">
        <div className="flex justify-between">
          <p className="text-2xl font-semibold text-gray-400">
            Latest site update
          </p>
          <p className="text-gray-500">Dec 2021</p>
        </div>
        <ul className="list-disc px-4">
          <li className="text-gray-300">
            Added aside content on desktop view.
          </li>
          <li className="text-gray-300">
            Added views and clap functionality on blog posts.
          </li>
          <li className="text-gray-300 hover:text-purple-400 underline">
            <Link href="/blog/2021-rewind">
              <a>Blog post: If I could turn back time - 2021 &rarr;</a>
            </Link>
          </li>
        </ul>
      </div>
      {/* Intro Section */}
      <section className="flex flex-col md:flex-row justify-between items-start gap-2">
        <div className="flex flex-col gap-2 text-center md:text-left md:w-3/4">
          <h1 className="text-4xl font-bold">Yanuwar Ishak</h1>
          <h2 className="text-xl text-purple-400 font-semibold">
            Front-end Developer
          </h2>
          <h2 className="text-gray-400 text-lg mb-2">
            Software engineer in learning mainly focused on Web Development.
          </h2>
          <SocialIcons />
        </div>
        <div>
          <Image
            className="rounded-full my-auto"
            src="/assets/images/avatar.png"
            width="120px"
            height="120px"
            alt="Yanuwar Ishak Avatar"
            priority
          />
        </div>
      </section>
      {/* Recent Posts Section */}
      <section className="flex flex-col gap-6">
        <div className="flex flex-row w-full items-center">
          <hr className="border-1 border-gray-600 my-auto w-full hidden md:block" />
          <h1 className="text-3xl font-semibold ml-0 md:ml-2">
            Featured&nbsp;Posts
          </h1>
        </div>
        <div className="flex flex-col gap-2">
          {recentPosts &&
            recentPosts.map((post, idx) => <PostList posts={post} key={idx} />)}
        </div>
        <Link href="/blog">
          <a className="text-purple-400 w-max hover:text-purple-500 underline flex justify-end md:justify-start ease-in-out duration-300">
            See all posts &#8594;
          </a>
        </Link>
      </section>
      {/* Recent Projects Section */}
      <section className="flex flex-col gap-6">
        <div className="flex flex-row w-full items-center">
          <hr className="border-1 border-gray-600 my-auto w-full hidden md:block" />
          <h1 className="text-3xl font-semibold ml-0 md:ml-2">
            Recent&nbsp;Projects
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {recentProjects &&
            recentProjects.map((project, idx) => (
              <ProjectList project={project} key={idx} />
            ))}
        </div>
        <Link href="/project">
          <a className="text-purple-400 w-max hover:text-purple-500 underline flex justify-end md:justify-start ease-in-out duration-300">
            See all projects &#8594;
          </a>
        </Link>
      </section>
      {/* Tech Stack Section */}
      <section className="flex flex-col gap-6">
        <div className="flex flex-row w-full items-center">
          <hr className="border-1 border-gray-600 my-auto w-full hidden md:block" />
          <h1 className="text-3xl font-semibold ml-0 md:ml-2">
            My&nbsp;Tech&nbsp;Stacks
          </h1>
        </div>
        <div className="grid grid-cols-4 gap-3 items-center text-center">
          {stacks.map((stack, idx) => (
            <div
              className="bg-[#1a1a1a] p-2 flex justify-center items-center h-32 "
              key={idx}
            >
              {stack}
            </div>
          ))}
        </div>
        <Link href="/tech">
          <a className=" text-purple-400 w-max hover:text-purple-500 underline flex justify-end md:justify-start ease-in-out duration-300">
            See complete list &#8594;
          </a>
        </Link>
      </section>
    </MainLayout>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts("data/blog");
  const projects = getAllProjects("data/project");
  const recentPosts = posts.slice(0, 3);
  const recentProjects = projects.slice(0, 4);
  return {
    props: {
      recentPosts,
      recentProjects,
    },
  };
}
