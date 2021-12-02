import Image from "next/image";
import Link from "next/link";
import MainLayout from "layout/MainLayout";
import TopTracks from "@/components/spotify/TopTracks";
import { SpotifyWrapper } from "hooks/context/state";
import SideNowPlaying from "@/components/spotify/SideNowPlaying";
import ContentNav from "@/components/ContentNav";

function TableOfContents({ href, text, style }) {
  return (
    <Link href={`/about/#${href}`}>
      <a className={`text-gray-400 underline hover:text-purple-400 ${style}`}>
        {text}
      </a>
    </Link>
  );
}

function leftContent() {
  return null;
}

function rightContent() {
  return (
    <>
      <SpotifyWrapper>
        <SideNowPlaying />
      </SpotifyWrapper>
      <ContentNav slug="/about" />
    </>
  );
}

export default function About() {
  return (
    <MainLayout
      title="About – Yanuwar Ishak"
      LeftContent={leftContent}
      RightContent={rightContent}
    >
      {/* About me section */}
      <div className="w-full flex flex-col md:flex-row justify-between md:items-start gap-6">
        <div className="w-full h-full md:w-2/5 flex flex-col justify-start">
          <span className="flex flex-col">
            <p className="text-xl font-bold text-[#3f3f3f] ml-2">/ アバウト</p>
            <h1 className="text-5xl font-bold">About </h1>
          </span>
          <div className="mt-2 flex flex-row flex-wrap gap-x-2 text-gray-500">
            <TableOfContents href="me" text="Me" />/
            <TableOfContents href="experience" text="Past experience" />/
            <TableOfContents
              href="philosophy"
              text="Scio me nihil scire"
              style="italic"
            />
            /
            <TableOfContents href="personal-life" text="Personal life" />/
            <TableOfContents href="monthly-tracks" text="Monthly tracks" />/
            <TableOfContents href="this-site" text="This site" />/
          </div>
        </div>
        <div className="flex flex-col text-center gap-2 w-full md:w-3/5">
          <div className="h-48 w-full relative">
            <Image
              className="filter scale-x-[-1]"
              src="/assets/images/about-photo.jpg"
              layout="fill"
              objectFit="cover"
              alt="A photo of me at Kaliadem Bunker, Circa 2018"
              priority
            />
          </div>
          <p className="text-xs text-gray-400">
            A photo of me at Kaliadem Bunker, Circa 2018
          </p>
        </div>
      </div>

      <div className="prose max-w-none text-gray-300">
        <h2 id="me">Me</h2>
        <p>
          Hi, Yanuwar Ishak here. I'm a software engineer based in Indonesia,
          mainly focused on Web Development, especially front-end development. I
          graduated from college in late 2019 with a Bachelor of Engineering
          degree, majoring in Software Engineering. I have included more
          thorough information related to my work and study on{" "}
          <a
            href="https://linkedin.com/in/yanuwar-ishak/"
            target="_blank"
            rel="noopener noreferrer"
          >
            my LinkedIn
          </a>{" "}
          or you can download my resume{" "}
          <a
            href="https://api.vercel.com/now/files/prj_LgXK4jXrS3OoUC53gxg4qA6pwQuL/ac45921331425f2efe31a2251c289934e76d771b96dd0f539ad95618156fc0f1/resume-yanuwar-Ishak.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
          .
        </p>
        <h2 id="experience">Past Experience</h2>
        <p>
          Through my college years, I have handled several projects which put me
          in several roles such as Android developer, UI/UX Designer,{" "}
          <a
            href="https://www.behance.net/yanuwarishak"
            target="_blank"
            rel="noopener noreferrer"
          >
            Graphic Designer
          </a>
          ,{" "}
          <a
            href="https://www.youtube.com/channel/UC-bcZ3seq6f8W_v6qTwU6mQ/videos"
            target="_blank"
            rel="noopener noreferrer"
          >
            Video Editor
          </a>{" "}
          and Web Developer. I have listed my tech knowledge that I have worked
          with and that I'm currently learning in{" "}
          <Link href="/tech">
            <a>tech page.</a>
          </Link>
        </p>
        <h2 className="italic" id="philosophy">
          Scio me nihil scire
        </h2>
        <p>
          This quote was coined by Socrates which roughly translates to{" "}
          <i>"I know that I know nothing"</i>. I believe that learning is a
          lifelong process and it's especially true as a Software Engineer. The
          development of technology moves fast, things that might relevant 2 or
          3 years ago might not be as relevant as it is today. To have the
          willingness to keep learning in order to adapt to better technology is
          a valuable asset that one can have.
        </p>
        <h2 id="personal-life">Personal life</h2>
        <p>
          Like most people, I also have hobbies. I play sports when I have the
          chance, and I also like spending time playing games, watching videos,
          learning new things, and mostly listening to music. I have put my
          monthly top tracks down below.
        </p>
      </div>
      {/* Spotify Section */}
      <div className="flex flex-col gap-1">
        <div className="bg-[#1DB954] p-4 text-black">
          <p className="text-2xl font-semibold" id="monthly-tracks">
            My Spotify Monthly Top Tracks
          </p>
          <p>Music I've listened to recently</p>
        </div>
        <TopTracks />
        <div className="prose max-w-none text-gray-300">
          <p>
            You're more than welcome to check out{" "}
            <a
              href="https://open.spotify.com/user/212rshe3omsf3edodvt4rqb7q?si=fc30f52cbc2d443d"
              target="_blank"
              rel="noopener noreferrer"
            >
              my Spotify
            </a>{" "}
            if we happen to have a similar music taste.
          </p>
          <h2 id="this-site">About this site</h2>
          <p>
            This site was developed to document my personal journey. Most of
            what's written here might be or might not be something of use for
            you. I would be grateful if you happen to find something that helped
            you. If you want to read more about this site such as technology
            used, you can go{" "}
            <Link href="/project/personal-website">
              <a>here</a>
            </Link>
            , all in all thank you for the visit, see you.
          </p>
        </div>
      </div>
    </MainLayout>
  );
}
