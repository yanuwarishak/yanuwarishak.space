import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";

import { getIndividualPost, getPostsPath } from "utils/getLocalData";

import MDXComponents from "@/components/MDXComponents";
import BlogContainer from "@/components/container/BlogContainer";

export default function Post({ post, slug, article }) {
  return (
    <BlogContainer post={post} slug={slug}>
      <MDXRemote {...article} components={MDXComponents} />
    </BlogContainer>
  );
}

export async function getStaticPaths() {
  const paths = getPostsPath("data/blog");
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const { post, content } = getIndividualPost("data/blog", slug);
  const article = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [rehypeHighlight, rehypeSlug],
    },
  });

  return {
    props: {
      post,
      slug,
      article,
    },
  };
}
