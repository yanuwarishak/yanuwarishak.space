import Link from "next/link";
import NowPlaying from "@/components/spotify/NowPlaying";

const ExternalLink = ({ href, children }) => (
  <a
    className="text-gray-500 hover:text-gray-300 transition"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

export default function Footer() {
  return (
    <div className="flex flex-col w-full mt-4 my-8">
      <hr className="w-full border-1 border-gray-700" />
      <NowPlaying />
      <div className="grid text-center grid-cols-2 gap-6 md:space-x-4 md:flex md:flex-row md:justify-between mb-8">
        <Link href="/">
          <a className="text-gray-500 hover:text-gray-300 transition">Home</a>
        </Link>
        <Link href="/project">
          <a className="text-gray-500 hover:text-gray-300 transition">
            Projects
          </a>
        </Link>
        <Link href="/blog">
          <a className="text-gray-500 hover:text-gray-300 transition">Blog</a>
        </Link>
        <Link href="/blog">
          <a className="text-gray-500 hover:text-gray-300 transition">Tech</a>
        </Link>
        <Link href="/about">
          <a className="text-gray-500 hover:text-gray-300 transition">About</a>
        </Link>
        <ExternalLink href="https://twitter.com/yanuwarrr">
          Twitter
        </ExternalLink>
        <ExternalLink href="https://github.com/yanuwarishak">
          GitHub
        </ExternalLink>
        <ExternalLink href="https://www.linkedin.com/in/yanuwar-ishak/">
          LinkedIn
        </ExternalLink>
      </div>
      <p className="text-gray-500 mx-auto">
        &copy; {new Date().getFullYear()} All rights reserved
      </p>
    </div>
  );
}
