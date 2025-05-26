import Link from "next/link";
import NowPlaying from "@/components/spotify/NowPlaying";

const ExternalLink = ({ href, text }) => (
  <a
    className="text-gray-400 hover:text-gray-300 transition"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    <p>{text}</p>
  </a>
);

const InternalLink = ({ href, text }) => (
  <Link href={href} className="text-gray-400 hover:text-gray-300 transition">
    <p>{text}</p>
  </Link>
);

export default function Footer() {
  return (
    <div className="flex flex-col w-full gap-6">
      <hr className="w-full border-1 border-gray-700" />
      <div className="block lg:hidden">
        <NowPlaying />
      </div>
      <h1 className="hidden">Footer</h1>
      <div className="grid grid-cols-3 gap-2">
        <div className="flex flex-col gap-4">
          <InternalLink href="/" text="Home" />
          <InternalLink href="/project" text="Project" />
          <InternalLink href="/blog" text="Blog" />
          <InternalLink href="/tech" text="Tech" />
          <InternalLink href="/about" text="About" />
        </div>
        <div className="flex flex-col gap-4">
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
          <ExternalLink
            href="https://api.vercel.com/now/files/prj_LgXK4jXrS3OoUC53gxg4qA6pwQuL/ac45921331425f2efe31a2251c289934e76d771b96dd0f539ad95618156fc0f1/resume-yanuwar-Ishak.pdf"
            text="Resume"
          />
        </div>
      </div>
      <p className="text-gray-400 text-right">
        &copy; {new Date().getFullYear()} All rights reserved
      </p>
    </div>
  );
}
