import Container from "@/components/container/Container";
import PostList from "@/components/post-list/PostList";

import { getAllPosts } from "utils/getAllPosts";

export default function Blog({ posts }) {
  return (
    <Container title="Blog – Yanuwar Ishak">
      <div className="absolute top-0 left-0 ">
        <h1 className="p-6 font-semibold text-lg md:hidden">Blog</h1>
      </div>
      <section className="w-full">
        <div className="flex flex-col">
          <div className="flex flex-col mb-10">
            <h1 className="text-5xl font-bold mb-2">Blog</h1>
            <p className=" pt-4 text-gray-400">
              Writing has always been a hard thing for me, therefore I've decided
              to force myself to write things that I've learned. Some words may
              feel out of place so I guess I'm sorry in advance.
            </p>
          </div>
          {posts.map((post, idx) => (
            <PostList posts={post} key={idx} />
          ))}
        </div>
      </section>
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
