import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";

import { getIndividualPost, getPostsPath } from "utils/getLocalData";

import MDXComponents from "@/components/MDXComponents";
import ProjectContainer from "@/components/container/ProjectContainer";

export default function Project({ post: project, slug, article }) {
  return (
    <ProjectContainer project={project} slug={slug}>
      <MDXRemote {...article} components={MDXComponents} />
    </ProjectContainer>
  );
}

export async function getStaticPaths() {
  const paths = getPostsPath("data/project");

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const { post, content } = getIndividualPost("data/project", slug);
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
