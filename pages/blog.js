import Container from "@/components/container/Container";
import PostList from "@/components/post-list/PostList";

import { getAllPosts } from "utils/getLocalData";

export default function Blog({ posts }) {
  return (
    <Container title="Blog – Yanuwar Ishak">
      <div className="relative">
        <h1 className="text-5xl font-bold z-1">Blog</h1>
        <p className="text-7xl font-bold text-[#202020] absolute -top-8 -left-6 z-[-1] cursor-default ">
          ブログ
        </p>
      </div>
      <p className=" text-gray-400 leading-relaxed">
        Writing has always been a hard thing for me, therefore I've decided to
        force myself to write things that I've learned. Some words may feel out
        of place so I guess I'm sorry in advance.
      </p>

      <div className="flex flex-col gap-4">
        {posts.map((post, idx) => (
          <PostList posts={post} key={idx} />
        ))}
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts("data/blog");

  return {
    props: {
      posts,
    },
  };
}
