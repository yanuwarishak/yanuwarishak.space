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
      path.join("data/blog", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return projects;
}
