import Link from "next/link";
import NowPlaying from "@/components/spotify/NowPlaying";

const ExternalLink = ({ href, text }) => (
  <a
    className="text-gray-500 hover:text-gray-400 transition"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    <h2>{text}</h2>
  </a>
);

const InternalLink = ({ href, text }) => (
  <Link href={href}>
    <a className="text-gray-500 hover:text-gray-400 transition">
      <h2>{text}</h2>
    </a>
  </Link>
);

export default function Footer() {
  return (
    <div className="flex flex-col w-full gap-6">
      <hr className="w-full border-1 border-gray-700" />
      <div className="block 2lg:hidden">
        <NowPlaying />
      </div>
      <h1 className="hidden">Footer</h1>
      <div className="grid grid-cols-3 px-2">
        <div className="flex flex-col gap-4">
          <InternalLink href="/" text="Home" />
          <InternalLink href="/project" text="Projects" />
          <InternalLink href="/blog" text="Blog" />
          <InternalLink href="/tech" text="Tech" />
          <InternalLink href="/about" text="About" />
        </div>
        <div className="flex flex-col gap-4">
          <ExternalLink href="https://twitter.com/yanuwarrr" text="Twitter" />
          <ExternalLink href="https://github.com/yanuwarishak" text="GitHub" />
          <ExternalLink
            href="https://www.linkedin.com/in/yanuwar-ishak/"
            text="LinkedIn"
          />
          <ExternalLink
            href="https://www.behance.net/yanuwarishak"
            text="Behance"
          />
          <ExternalLink
            href="https://www.youtube.com/channel/UC-bcZ3seq6f8W_v6qTwU6mQ"
            text="YouTube"
          />
        </div>
        <div className="flex flex-col gap-4">
          <ExternalLink href="mailto:yanuwarishak@gmail.com" text="E-mail" />
          <ExternalLink href="/resume-yanuwar-ishak.pdf" text="Resume" />
        </div>
      </div>
      <p className="text-gray-500 text-right">
        &copy; {new Date().getFullYear()} All rights reserved
      </p>
    </div>
  );
}
