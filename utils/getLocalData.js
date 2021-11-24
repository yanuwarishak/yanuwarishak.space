import fs from "fs";
import path from "path";
import matter from "gray-matter";

export function getAllPosts(directory) {
  // Get files from directory, must be a string path
  const files = fs.readdirSync(path.join(directory));

  // Get slug and frontmatter from file
  const posts = files.map((filename) => {
    // Create slug
    const slug = filename.replace(".mdx", "");

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join(directory, filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  posts.sort(
    (a, b) =>
      Number(new Date(b.frontmatter.publishedAt)) -
      Number(new Date(a.frontmatter.publishedAt))
  );

  return posts;
}

export function getAllProjects(directory) {
  const files = fs.readdirSync(path.join(directory));

  // Get slug and frontmatter from posts
  const projects = files.map((filename) => {
    // Create slug
    const slug = filename.replace(".mdx", "");

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join(directory, filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);
    const { title, publishedAt, category, techs, excerpt, image } = frontmatter;

    return {
      slug,
      title,
      publishedAt,
      category,
      techs,
      excerpt,
      image,
    };
  });

  projects.sort(
    (a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
  );

  return projects;
}

// Get individual post frontmatter and post content
export function getIndividualPost(directory, slug) {
  const markdownWithMeta = fs.readFileSync(
    path.join(directory, slug + ".mdx"),
    "utf-8"
  );

  const { data: post, content } = matter(markdownWithMeta);

  return { post, content };
}

// Get paths for static generation
export function getPostsPath(directory) {
  const files = fs.readdirSync(path.join(directory));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".mdx", ""),
    },
  }));

  return paths;
}
