import Link from "next/link";
import NowPlaying from "@/components/spotify/NowPlaying";

const ExternalLink = ({ href, text }) => (
  <a
    className="text-gray-400 hover:text-gray-300 transition"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {text}
  </a>
);

const InternalLink = ({ href, text }) => (
  <Link href={href}>
    <a className="text-gray-400 hover:text-gray-300 transition">{text}</a>
  </Link>
);

export default function Footer() {
  return (
    <div className="flex flex-col w-full mt-4 my-8">
      <hr className="w-full border-1 border-gray-700" />
      <NowPlaying />
      <div className="grid text-center grid-cols-2 gap-6 md:space-x-4 md:flex md:flex-row md:justify-between mb-8">
        <InternalLink href="/" text="Home" />
        <InternalLink href="/project" text="Projects" />
        <InternalLink href="/blog" text="Blog" />
        <InternalLink href="/tech" text="Tech" />
        <InternalLink href="/about" text="About" />

        <ExternalLink href="https://twitter.com/yanuwarrr" text="Twitter" />
        <ExternalLink href="https://github.com/yanuwarishak" text="GitHub" />
        <ExternalLink href="https://www.linkedin.com/in/yanuwar-ishak/" text="LinkedIn" />
      </div>
      <p className="text-gray-500 mx-auto">
        &copy; {new Date().getFullYear()} All rights reserved
      </p>
    </div>
  );
}
