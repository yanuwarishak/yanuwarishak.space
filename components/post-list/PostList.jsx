import Link from "next/link";
import Image from "next/image";

export default function PostList({ posts }) {
  return (
    <Link href={`/blog/${posts.slug}`}>
      <a>
        <div className="flex flex-row p-2 my-2 justify-start cursor-pointer hover:bg-[#1a1a1a] border border-purple-400 rounded-lg md:rounded-none md:border-0">
          <img
            src={posts.frontmatter.image}
            alt={posts.frontmatter.title}
            className="w-20 h-20 hidden md:block mr-4 self-center"
          />
          <div className="flex flex-col w-full">
            <div className="flex flex-row justify-between">
              <h2 className="text-lg my-1 font-semibold">
                {posts.frontmatter.title}
              </h2>
              <p className="text-sm my-1 hidden md:block text-gray-400">
                {posts.frontmatter.publishedAt}
              </p>
            </div>
            <p className="my-1 text-gray-400">{posts.frontmatter.summary}</p>
          </div>
        </div>
      </a>
    </Link>
  );
}
