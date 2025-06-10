import Image from 'next/image'
import Link from 'next/link'
import MainLayout from 'layout/MainLayout'
import { SpotifyWrapper } from 'hooks/context/state'
import SideNowPlaying from '@/components/spotify/SideNowPlaying'
import ContentNav from '@/components/ContentNav'

import headerImage from '../public/assets/images/about-banner.webp'

function TableOfContents({ href, text, style }) {
  return (
    <Link
      href={`/about/#${href}`}
      className={`text-gray-400 underline hover:text-purple-400 ${style}`}
    >
      {text}
    </Link>
  )
}

function leftContent() {
  return null
}

function rightContent() {
  return (
    <>
      <SpotifyWrapper>
        <SideNowPlaying />
      </SpotifyWrapper>
      <ContentNav slug="/about" />
    </>
  )
}

export default function About() {
  return (
    <MainLayout title="About – Yanuwar Ishak" LeftContent={leftContent} RightContent={rightContent}>
      {/* About me section */}
      <div className="w-full flex flex-col-reverse xs:flex-row justify-between md:items-start gap-6">
        <div className="w-full h-full md:w-2/5 flex flex-col justify-start">
          <span className="flex flex-col">
            <p className="text-xl font-bold text-[#616161] ml-2">/ アバウト</p>
            <h1 className="text-5xl font-bold">About </h1>
          </span>
          <div className="mt-2 flex flex-row flex-wrap gap-x-2 text-gray-500">
            <TableOfContents href="greetings" text="Greetings" />/
            <TableOfContents href="work-experience" text="Work Experience" />/
            <TableOfContents href="this-site" text="This site" />/
          </div>
        </div>
        <div className="flex flex-col text-center gap-2 w-full md:w-3/5">
          <div className="w-full relative h-48 overflow-hidden">
            <Image src={headerImage} alt="A photo of Yanuwar Ishak" />
          </div>
          <p className="text-xs text-gray-400">A photo of me at Kaliadem Bunker, Circa 2018</p>
        </div>
      </div>

      <div className="prose max-w-none text-gray-300">
        <h2 id="greetings">Greetings</h2>
        <p>
          Hi there, Yanuwar here, I'm a Software Engineer based in Indonesia with a focus on web
          development, particularly front-end. I hold a Bachelor of Engineering in Software
          Engineering, earned in late 2019. Throughout my professional career, I’ve contributed to
          both public-facing platforms and internal tools, primarily building scalable, maintainable
          front-end applications while also working on backend systems to support features like
          localization and content management. I enjoy collaborating with cross-functional teams to
          deliver polished user experiences and continuously seek ways to improve performance,
          reliability, and usability. You can find more details about my background on{' '}
          <a
            href="https://linkedin.com/in/yanuwar-ishak/"
            target="_blank"
            rel="noopener noreferrer"
          >
            my LinkedIn
          </a>{' '}
          or you can download{' '}
          <a
            href="https://api.vercel.com/now/files/prj_LgXK4jXrS3OoUC53gxg4qA6pwQuL/ac45921331425f2efe31a2251c289934e76d771b96dd0f539ad95618156fc0f1/resume-yanuwar-Ishak.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            my resume
          </a>
          .
        </p>
        <h2 id="work-experience"> Work Experience</h2>
        <p>
          As a front-end engineer, I've worked extensively with modern web technologies including
          React, Next.js, JavaScript, and TypeScript, building scalable and maintainable user
          interfaces. I'm also experienced in styling approaches such as Tailwind CSS, SCSS, CSS
          Modules, and component libraries like Ant Design and Atlassian's Atlaskit. These tools
          have helped streamline UI development while ensuring design consistency across projects.
        </p>
        <p>
          Beyond the front end, I've contributed to backend-related tasks using Node.js and have
          basic familiarity with Golang. I've also worked with React Query for data fetching and
          caching, and deployed assets and services via AWS S3 and Heroku. For daily development, I
          primarily use VS Code and work with tools like Docker, Git (across GitHub, GitLab, and
          Bitbucket), as well as collaboration platforms like Jira and Slack.
        </p>
        <p>
          From 2022 to 2025, I’ve worked remotely in a distributed team setting, which has made me
          highly comfortable with asynchronous communication, self-directed work, and delivering
          results with minimal supervision. This experience has reinforced my ability to stay
          aligned with team goals while maintaining flexibility and accountability in a remote
          environment.
        </p>
        <h2 id="this-site">About this site</h2>
        <p>
          This site was developed to document my personal journey. Most of what's written here might
          be or might not be something of use for you. I would be grateful if you happen to find
          something that helped you. If you want to read more about this site such as technology
          used, you can visit <Link href="/project/personal-website">about this site</Link>, all in
          all thank you for the visit, see you.
        </p>
      </div>
    </MainLayout>
  )
}
