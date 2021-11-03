import Image from "next/image";
import Link from "next/link";
import Container from "@/components/container/Container";
import {
  JavascriptIcon,
  ReactIcon,
  NextjsIcon,
  NodeIcon,
} from "@/components/icons";

export default function Home() {
  return (
    <Container>
      <div className="absolute top-0 left-0">
        <h1 className="p-6 font-semibold text-lg md:hidden">Home</h1>
      </div>
      {/* Intro Section */}
      <section className="flex flex-col md:flex-row-reverse mb-8">
        <div className="avatar w-20 md:w-auto mb-4 md:mb-0 self-center">
          <Image
            className="rounded-full"
            src="/assets/images/avatar.png"
            width="145px"
            height="145px"
          />
        </div>
        <div className="flex flex-col">
          <h1 className="text-4xl font-bold self-center text-center md:self-start">
            Yanuwar Ishak
          </h1>
          <h2 className=" text-xl mt-2 text-gray-200 font-semibold self-center md:self-start">
            Front-end Developer
          </h2>
          <p className="w-10/12 sm:w-8/12 pt-4 text-gray-400 self-center md:self-start text-center md:text-left">
            JavaScript enthusiast who well-versed in React ecosystem and ready
            to turn design into working product.
          </p>
        </div>
      </section>
      {/* Tech Stack Section */}
      <section className="flex flex-col mb-8">
        <h1 className="text-xl font-semibold text-gray-200 mb-4">
          My Tech Stack
        </h1>
        <div className="grid grid-cols-4 gap-x-3 items-center text-center">
          <div className="bg-gray-900 p-2 flex justify-center items-center h-32">
            <JavascriptIcon />
          </div>
          <div className="bg-gray-900 p-2 flex justify-center items-center h-32">
            <ReactIcon />
          </div>
          <div className="bg-gray-900 p-2 flex justify-center items-center h-32">
            <NextjsIcon />
          </div>
          <div className="bg-gray-900 p-2 flex justify-center items-center h-32">
            <NodeIcon />
          </div>
        </div>
        <Link href="/tech">
          <a className="mt-4 self-end text-gray-200 hover:text-blue-400 hover:underline">
            See complete list &#8594;
          </a>
        </Link>
      </section>
      {/* Recent Project Section */}
      <section>
        <h1 className="text-xl font-semibold text-gray-200 mb-4">
          Recent Project
        </h1>
      </section>
    </Container>
  );
}
