import Image from "next/image";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";

import Container from "@/components/container/Container";

const components = { Image };

export default function Post({ frontmatter, slug, article }) {
  return (
    <Container>
      <div>
        <section className="prose max-w-none">
          <MDXRemote {...article} components={components} />
        </section>
      </div>
    </Container>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("data/blog"));

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
    path.join("data/blog", slug + ".mdx"),
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
