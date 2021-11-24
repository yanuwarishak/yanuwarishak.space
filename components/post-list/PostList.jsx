import Link from "next/link";
import Image from "next/image";

export default function PostList({ posts: { frontmatter: post, slug } }) {
  return (
    <div className="flex flex-col p-4 border-purple-200 border hover:border-purple-400 hover:bg-[#141414] rounded-lg h-auto">
      <Link href={`/blog/${slug}`}>
        <a className="flex flex-col justify-start cursor-pointer">
          <div className="flex flex-row justify-between">
            <h2 className="text-lg font-semibold">{post.title}</h2>
            <p className="text-sm my-1 hidden md:block text-gray-400">
              {post.publishedAt}
            </p>
          </div>
          <p className="my-1 text-gray-400">{post.summary}</p>
        </a>
      </Link>
    </div>
  );
}
