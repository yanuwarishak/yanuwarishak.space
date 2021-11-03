import Link from "next/link";

export default function PostList({ posts }) {
  return (
    <div className="flex flex-row p-2 my-2 justify-start cursor-pointer">
      <img
        src={posts.frontmatter.image}
        alt={posts.frontmatter.title}
        className="w-20 h-20 mr-4 self-center"
      />
      <div className="flex flex-col w-full">
        <div className="flex flex-row justify-between">
          <Link href={`/blog/${posts.slug}`}>
            <a>
              <h1 className="text-lg my-1 font-semibold">
                {posts.frontmatter.title}
              </h1>
            </a>
          </Link>
          <h1 className="text-sm my-1 text-gray-500">
            {posts.frontmatter.publishedAt}
          </h1>
        </div>
        <h1 className="my-1 text-gray-200">{posts.frontmatter.summary}</h1>
      </div>
    </div>
  );
}
