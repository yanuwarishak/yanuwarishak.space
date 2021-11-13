import fs from "fs";
import path from "path";
import matter from "gray-matter";

export function getAllProjects() {
  // Get files from data/blog directory
  const files = fs.readdirSync(path.join("data/project"));

  // Get slug and frontmatter from posts
  const projects = files.map((filename) => {
    // Create slug
    const slug = filename.replace(".mdx", "");

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join("data/project", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);
    const {
      title,
      finishedAt,
      category,
      techs,
      projectType,
      excerpt,
      image,
      demo,
    } = frontmatter;

    return {
      slug,
      title,
      finishedAt,
      category,
      techs,
      projectType,
      excerpt,
      image,
      demo,
    };
  });

  projects.sort(
    (a, b) => Number(new Date(b.finishedAt)) - Number(new Date(a.finishedAt))
  );

  return projects;
}
