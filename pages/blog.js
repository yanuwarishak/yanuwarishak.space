import Container from "@/components/container/Container";
import PostList from "@/components/post-list/PostList";

import { getAllPosts } from "utils/getAllPosts";

export default function Blog({ posts }) {
  const filteredBlogPosts = posts.sort(
    (a, b) =>
      Number(new Date(b.frontmatter.publishedAt)) -
      Number(new Date(a.frontmatter.publishedAt))
  );

  return (
    <Container title="Blog – Yanuwar Ishak">
      <div className="absolute top-0 left-0 ">
        <h1 className="p-6 font-semibold text-lg md:hidden">Blog</h1>
      </div>
      <div className="pb-2 w-full">
        <div className="flex flex-col">
          <div className="flex flex-col mb-10">
            <h1 className="text-5xl font-bold">Blog</h1>
            <p className=" w-10/12 pt-4 text-gray-400">
              JavaScript enthusiast who well versed in React ecosystem and ready
              to turn design into working product.
            </p>
          </div>
          {filteredBlogPosts.map((post, idx) => (
            <PostList posts={post} key={idx} />
          ))}
        </div>
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts();

  return {
    props: {
      posts,
    },
  };
}
