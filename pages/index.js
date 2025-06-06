import Image from 'next/image'
import Link from 'next/link'

import MainLayout from 'layout/MainLayout'
import { SpotifyWrapper } from 'hooks/context/state'

import SideNowPlaying from '@/components/spotify/SideNowPlaying'
import PostList from '@/components/post-list/PostList'
import ProjectList from '@/components/project-list/ProjectList'
import { SocialIcons } from '@/components/icons'

import { featuredPost, featuredProject } from '@/data/featured.data'
import { techStack } from '@/data/techstacks.data'
import headerImage from '../public/assets/images/avatar.webp'

function leftContent() {
  return null
}

function rightContent() {
  return (
    <>
      <SpotifyWrapper>
        <SideNowPlaying />
      </SpotifyWrapper>
    </>
  )
}

export default function Home() {
  return (
    <MainLayout LeftContent={leftContent} RightContent={rightContent}>
      <h1 className="hidden">yanuwarishak.space</h1>
      {/* Intro Section */}
      <section className="flex flex-col-reverse md:flex-row justify-between items-start gap-4 md:gap-2 mt-12 xs:mt-0">
        <div className="flex flex-col gap-2 text-left md:w-3/4">
          <span className="flex flex-col">
            <p className="text-xl font-bold text-[#616161] ml-2 hidden md:block">
              / ヤヌワル イシャク
            </p>
            <h1 className="text-4xl md:text-5xl font-bold">Yanuwar Ishak</h1>
          </span>
          <h2 className="text-xl text-purple-400 font-semibold">Front-end Developer</h2>
          <h2 className="text-gray-400 text-lg mb-2">
            Software engineer in learning mainly focused on Web Development.
          </h2>
        </div>
        <div className="flex flex-col items-center gap-4">
          <div className="relative w-20 h-20 xs:w-24 xs:h-24 md:w-32 md:h-32">
            <Image
              width={50}
              height={50}
              className="rounded-full my-auto"
              src={headerImage}
              alt="Yanuwar Ishak Avatar"
              style={{ objectFit: 'cover' }}
              placeholder="blur"
              priority
            />
          </div>
          <div className="hidden md:block">
            <SocialIcons />
          </div>
        </div>
      </section>
      {/* Recent Posts Section */}
      <section className="flex flex-col gap-6">
        <div className="flex flex-row w-full items-center">
          <h1 className="text-3xl font-semibold mr-0 md:mr-2">Featured&nbsp;Posts</h1>
          <hr className="border-1 border-gray-600 my-auto w-full hidden md:block" />
        </div>
        <div className="flex flex-col gap-2">
          {featuredPost && featuredPost.map((post, idx) => <PostList posts={post} key={idx} />)}
        </div>
        <Link
          href="/blog"
          className="text-purple-400 hover:text-purple-300 w-max underline ease-in-out duration-300 self-end"
        >
          See all posts &#8594;
        </Link>
      </section>
      {/* Recent Projects Section */}
      <section className="flex flex-col gap-6">
        <div className="flex flex-row w-full items-center">
          <h1 className="text-3xl font-semibold mr-0 md:mr-2">Featured&nbsp;Projects</h1>
          <hr className="border-1 border-gray-600 my-auto w-full hidden md:block" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {featuredProject &&
            featuredProject.map((project, idx) => <ProjectList project={project} key={idx} />)}
        </div>
        <Link
          href="/project"
          className="text-purple-400 hover:text-purple-300 w-max underline ease-in-out duration-300 self-end"
        >
          See all projects &#8594;
        </Link>
      </section>
      {/* Tech Stack Section */}
      <section className="flex flex-col gap-6">
        <div className="flex flex-row w-full items-center">
          <h1 className="text-3xl font-semibold mr-0 md:mr-2">My&nbsp;Tech&nbsp;Stacks</h1>
          <hr className="border-1 border-gray-600 my-auto w-full hidden md:block" />
        </div>
        <div className="grid grid-cols-4 gap-3 items-center text-center h-24 md:h-32">
          {techStack.map((stack, idx) => (
            <div
              className="relative bg-[#1a1a1a] flex justify-center items-center h-full w-full"
              key={idx}
            >
              <div className="relative w-2/3 h-2/3">
                <Image
                  width={50}
                  height={50}
                  src={stack.url}
                  alt={stack.desc}
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </div>
          ))}
        </div>
        <Link
          href="/tech"
          className="text-purple-400 hover:text-purple-300 w-max underline ease-in-out duration-300 self-end"
        >
          See complete list &#8594;
        </Link>
      </section>
    </MainLayout>
  )
}
