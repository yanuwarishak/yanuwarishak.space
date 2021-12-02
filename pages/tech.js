// import Container from "@/components/container/Container";
import MainLayout from "layout/MainLayout";
import Image from "next/image";
import { SpotifyWrapper } from "hooks/context/state";
import SideNowPlaying from "@/components/spotify/SideNowPlaying";
import ContentNav from "@/components/ContentNav";
import {
  mainStack,
  minorStack,
  currentlyLearning,
  thingsToTry,
} from "@/data/techstacks";

function leftContent() {
  return null;
}

function rightContent() {
  return (
    <>
      <SpotifyWrapper>
        <SideNowPlaying />
      </SpotifyWrapper>
      <ContentNav />
    </>
  );
}

export default function Tech() {
  return (
    <MainLayout
      title="Tech – Yanuwar Ishak"
      LeftContent={leftContent}
      RightContent={rightContent}
    >
      {/* Page Header */}
      <div className="w-full flex flex-col md:flex-row justify-between md:items-start gap-6">
        <div className="w-full h-full md:w-2/5 flex flex-col justify-start">
          <span className="flex flex-col">
            <p className="text-xl font-bold text-[#3f3f3f] ml-2">/ テク</p>
            <h1 className="text-5xl font-bold">Tech </h1>
          </span>
          <p className="mt-2 text-gray-500 leading-relaxed">
            Here I listed all the technologies that I currently use and familiar
            with as well as some that I've planned to learn.
          </p>
        </div>
        <div className="flex flex-col text-center gap-2 w-full md:w-3/5">
          <div className="h-48 w-full relative">
            <Image
              src="/assets/images/code-vscode.jpg"
              layout="fill"
              objectFit="cover"
              alt="A photo of programming language"
              priority
            />
          </div>
          <p className="text-xs text-gray-400">
            Photo by Ferenc Almasi on{" "}
            <a
              href="https://unsplash.com/photos/eYpcLDXHVb0"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Unsplash
            </a>
          </p>
        </div>
      </div>

      <div className="w-full bg-gray-800 p-4 rounded-md">
        <h2 className="text-lg font-semibold mb-4" id="main-tech">
          Main tech stacks
        </h2>
        <div className="flex flex-col gap-3">
          <div className="grid grid-cols-2 gap-3 xs:grid-cols-4">
            {mainStack.map((stack, idx) => (
              <div
                key={idx}
                className="bg-gray-900 p-2 flex mx-auto justify-center items-center w-full rounded-md"
              >
                {stack}
              </div>
            ))}
          </div>
          <div className="flex flex-row flex-wrap gap-3">
            {minorStack.map((stack, idx) => (
              <div key={idx} className="bg-gray-900 p-2 rounded-md">
                {stack}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full bg-[#086d54] p-4 rounded-md">
        <h2 className="text-lg font-semibold mb-1" id="currently-learning">
          Currently Learning
        </h2>
        <p className="mb-4 text-gray-300">Sorted by priority</p>
        <div className="flex flex-col gap-2">
          {currentlyLearning.map((subject, idx) => (
            <div key={idx} className="bg-green-900 p-2 flex w-full rounded-md">
              {subject}
            </div>
          ))}
        </div>
      </div>
      <div className="w-full bg-[#264863] p-4 rounded-md">
        <h2 className="text-lg font-semibold mb-1" id="to-try">
          Planning to try
        </h2>
        <p className="mb-4 text-gray-300">Things that caught my attention</p>
        <div className="flex flex-col gap-2">
          {thingsToTry.map((subject, idx) => (
            <div key={idx} className="bg-[#163249] p-2 flex w-full rounded-md">
              {subject}
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
