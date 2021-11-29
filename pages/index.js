import Image from "next/image";
import Link from "next/link";
import { getAllPosts, getAllProjects } from "utils/getLocalData";

import PostList from "@/components/post-list/PostList";
import ProjectList from "@/components/project-list/ProjectList";
import Container from "@/components/container/Container";
import {
  JavascriptIcon,
  ReactIcon,
  NextjsIcon,
  NodeIcon,
} from "@/components/icons";

export default function Home({ recentPosts, recentProjects }) {
  const stacks = [
    <JavascriptIcon />,
    <ReactIcon />,
    <NextjsIcon />,
    <NodeIcon />,
  ];
  return (
    <Container>
      <div className="absolute top-0 left-0">
        <h1 className="p-6 font-semibold text-lg md:hidden">Home</h1>
      </div>
      {/* Intro Section */}
      <section className="flex flex-col md:flex-row justify-between gap-2">
        <div className="w-1/4 self-center flex flex-row justify-center">
          <Image
            className="rounded-full my-auto"
            src="/assets/images/avatar.png"
            width="120px"
            height="120px"
            alt="Yanuwar Ishak Avatar"
            priority
          />
        </div>
        <div className="flex flex-col gap-2 text-center md:text-left md:w-3/4">
          <h1 className="text-4xl font-bold">Yanuwar Ishak</h1>
          {/* <h1 className="text-7xl absolute -left-28 top-28 font-bold text-[#202020] w-8 flex-wrap hidden md:flex cursor-default neon-text leading-[1.1]">
            ヤヌワル イシャク
          </h1> */}
          <h2 className="text-xl text-purple-400 font-semibold">
            Front-end Developer
          </h2>
          <h2 className="text-gray-400 text-lg">
            Software engineer in learning mainly focused on Web Development.
          </h2>
        </div>
      </section>
      {/* Recent Posts Section */}
      <section className="flex flex-col gap-6">
        <div className="flex flex-row w-full items-center">
          <hr className="border-1 border-gray-600 my-auto w-full hidden md:block" />
          <h1 className="text-3xl font-semibold ml-0 md:ml-2">
            Recent&nbsp;Posts
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
    </Container>
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
