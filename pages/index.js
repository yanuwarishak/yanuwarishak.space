import Image from "next/image";
import Link from "next/link";
import { getAllPosts } from "utils/getAllPosts";
import { getAllProjects } from "utils/getAllProjects";

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
  return (
    <Container>
      <div className="absolute top-0 left-0">
        <h1 className="p-6 font-semibold text-lg md:hidden">Home</h1>
      </div>
      {/* Intro Section */}
      <section className="flex flex-col mb-8">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-4 self-center md:mb-0">
            <img
              className="rounded-full"
              src="/assets/images/avatar.png"
              width="120px"
              height="120px"
              alt="Yanuwar Ishak Avatar"
            />
          </div>
          <div className="flex flex-col md:w-3/4">
            <Link href="/about">
              <a className="text-4xl font-bold text-center md:self-start hover:underline">
                <h1>Yanuwar Ishak</h1>
              </a>
            </Link>
            <h2 className="text-xl mt-2 text-purple-400 font-semibold self-center md:self-start z-[1]">
              Front-end Developer
            </h2>
            <p className="pt-4 text-gray-400 self-center md:self-start text-center md:text-left">
              Web Developer mainly focus on developing JavaScript application
              and well-versed in React ecosystem.
            </p>
          </div>
        </div>
      </section>
      {/* Recent Projects Section */}
      <section className="flex flex-col mb-12">
        <div className="flex flex-row-reverse w-full items-center mb-4">
          <h1 className="text-3xl font-semibold text-gray-200 ml-2">
            Recent&nbsp;Projects
          </h1>
          <hr className="border-1 border-gray-600 my-auto w-full" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          {recentProjects &&
            recentProjects.map((project, idx) => (
              <ProjectList project={project} key={idx} />
            ))}
        </div>
        <Link href="/project">
          <a className="mt-4 text-gray-200 hover:text-purple-400 hover:underline w-max">
            See all projects &#8594;
          </a>
        </Link>
      </section>
      {/* Recent Posts Section */}
      <section className="flex flex-col mb-12">
        <div className="flex flex-row-reverse w-full items-center mb-4">
          <h1 className="text-3xl font-semibold text-gray-200 ml-2">
            Recent&nbsp;Posts
          </h1>
          <hr className="border-1 border-gray-600 my-auto w-full" />
        </div>
        {recentPosts &&
          recentPosts.map((post, idx) => <PostList posts={post} key={idx} />)}
        <Link href="/blog">
          <a className="mt-4 text-gray-200 hover:text-purple-400 hover:underline w-max">
            See all posts &#8594;
          </a>
        </Link>
      </section>
      {/* Tech Stack Section */}
      <section className="flex flex-col">
        <div className="flex flex-row-reverse w-full items-center mb-8">
          <h1 className="text-3xl font-semibold text-gray-200 ml-2">
            My&nbsp;Tech&nbsp;Stacks
          </h1>
          <hr className="border-1 border-gray-600 my-auto w-full" />
        </div>
        <div className="grid grid-cols-4 gap-x-3 items-center text-center">
          <div className="bg-[#1a1a1a] p-2 flex justify-center items-center h-32">
            <JavascriptIcon />
          </div>
          <div className="bg-[#1a1a1a] p-2 flex justify-center items-center h-32">
            <ReactIcon />
          </div>
          <div className="bg-[#1a1a1a] p-2 flex justify-center items-center h-32">
            <NextjsIcon />
          </div>
          <div className="bg-[#1a1a1a] p-2 flex justify-center items-center h-32">
            <NodeIcon />
          </div>
        </div>
        <Link href="/tech">
          <a className="mt-4 text-gray-200 hover:text-purple-400 hover:underline w-max">
            See complete list &#8594;
          </a>
        </Link>
      </section>
    </Container>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts();
  const projects = getAllProjects();
  const recentPosts = posts.slice(0, 3);
  const recentProjects = projects.slice(0, 4);
  return {
    props: {
      recentPosts,
      recentProjects,
    },
  };
}
