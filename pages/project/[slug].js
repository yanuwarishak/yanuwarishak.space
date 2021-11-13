import Image from "next/image";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";

import Container from "@/components/container/Container";
import ProjectContainer from "@/components/container/ProjectContainer";

const components = { Image };

export default function Project({ frontmatter, slug, article }) {
  return (
    <ProjectContainer project={frontmatter} slug={slug}>
      <MDXRemote {...article} components={components} />
    </ProjectContainer>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("data/project"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".mdx", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("data/project", slug + ".mdx"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);
  const article = await serialize(content);
  return {
    props: {
      frontmatter,
      slug,
      article,
    },
  };
}
