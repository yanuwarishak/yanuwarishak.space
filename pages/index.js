import Image from "next/image";
import Link from "next/link";
import { getAllProjects } from "utils/getLocalData";

import FeaturedPost from "@/components/FeaturedPost";
import ProjectList from "@/components/project-list/ProjectList";

import MainLayout from "layout/MainLayout";
import { SpotifyWrapper } from "hooks/context/state";
import SideNowPlaying from "@/components/spotify/SideNowPlaying";

import {
  JavascriptIcon,
  ReactIcon,
  NextjsIcon,
  NodeIcon,
  SocialIcons,
} from "@/components/icons";

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

const featuredPost = [
  {
    title: "If I Could Turn Back Time - 2021",
    slug: "2021-rewind",
    excerpt:
      "A lot of things happened in my life this year, and here is what I wish I learned earlier or done earlier in 2021",
    publishedAt: "2021-11-26",
  },
  {
    title: "Menggunakan Preact pada Next.js",
    slug: "preact-nextjs",
    excerpt: "Apa itu Preact dan kapan waktu yang tepat untuk menggunakannya.",
    publishedAt: "2021-11-26",
  },
  {
    title: "My Discovery of Gap Property",
    slug: "css-gap-property",
    excerpt:
      "Automatically set distances or gutters between each flex/grid items was never this easy.",
    publishedAt: "2021-11-25",
  },
];

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
          <p className="text-2xl font-semibold text-gray-200">
            Latest site update
          </p>
          <p className="text-gray-500">Dec 2021</p>
        </div>
        <ul className="list-disc px-4">
          <li className="text-gray-400">
            Added aside navigation and content on desktop view.
          </li>
          <li className="text-gray-400">
            Website redesign with new layout.
          </li>
          <li className="text-gray-400 hover:text-gray-200 underline w-max">
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
        </div>
        <div className="flex flex-col items-center gap-4">
          <Image
            className="rounded-full my-auto"
            src="/assets/images/avatar.png"
            width="120px"
            height="120px"
            alt="Yanuwar Ishak Avatar"
            priority
          />
          <SocialIcons />
        </div>
      </section>
      {/* Recent Posts Section */}
      <section className="flex flex-col gap-6">
        <div className="flex flex-row w-full items-center">
          <h1 className="text-3xl font-semibold mr-0 md:mr-2">
            Featured&nbsp;Posts
          </h1>
          <hr className="border-1 border-gray-600 my-auto w-full hidden md:block" />
        </div>
        <div className="flex flex-col gap-2">
          {featuredPost &&
            featuredPost.map((post, idx) => (
              <FeaturedPost post={post} key={idx} />
            ))}
        </div>
        <Link href="/blog">
          <a className="text-purple-400 hover:text-purple-300 w-max underline ease-in-out duration-300 self-end">
            See all posts &#8594;
          </a>
        </Link>
      </section>
      {/* Recent Projects Section */}
      <section className="flex flex-col gap-6">
        <div className="flex flex-row w-full items-center">
          <h1 className="text-3xl font-semibold mr-0 md:mr-2">
            Recent&nbsp;Projects
          </h1>
          <hr className="border-1 border-gray-600 my-auto w-full hidden md:block" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {recentProjects &&
            recentProjects.map((project, idx) => (
              <ProjectList project={project} key={idx} />
            ))}
        </div>
        <Link href="/project">
          <a className="text-purple-400 hover:text-purple-300 w-max underline ease-in-out duration-300 self-end">
            See all projects &#8594;
          </a>
        </Link>
      </section>
      {/* Tech Stack Section */}
      <section className="flex flex-col gap-6">
        <div className="flex flex-row w-full items-center">
          <h1 className="text-3xl font-semibold mr-0 md:mr-2">
            My&nbsp;Tech&nbsp;Stacks
          </h1>
          <hr className="border-1 border-gray-600 my-auto w-full hidden md:block" />
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
          <a className=" text-purple-400 hover:text-purple-300 w-max underline ease-in-out duration-300 self-end">
            See complete list &#8594;
          </a>
        </Link>
      </section>
    </MainLayout>
  );
}

export async function getStaticProps() {
  const projects = getAllProjects("data/project");
  const recentProjects = projects.slice(0, 4);
  return {
    props: {
      recentProjects,
    },
  };
}
