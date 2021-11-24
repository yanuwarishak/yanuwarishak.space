import fs from "fs";
import path from "path";

const Sitemap = () => {};

export const getServerSideProps = ({ res }) => {
  const baseUrl = {
    development: "http://localhost:3000",
    production: "https://yanuwarishak.space",
  }[process.env.NODE_ENV];

  const staticPages = fs
    .readdirSync(
      {
        development: "pages",
        production: "./",
      }[process.env.NODE_ENV]
    )
    .filter((staticPage) => {
      return ![
        "api",
        "_app.js",
        "_document.js",
        "_error.js",
        "sitemap.xml.js",
        "index.js",
        "blog.js",
        "project.js",
      ].includes(staticPage);
    })
    .map((staticPagePath) => {
      return `${baseUrl}/${staticPagePath}`;
    });

  function getDynamicPaths(directory) {
    const files = fs.readdirSync(path.join(directory));
    const paths = files.map((filename) => filename.replace(".mdx", ""));
    return paths;
  }

  const blogPages = getDynamicPaths("data/blog").map((blogPath) => {
    return `${baseUrl}/blog/${blogPath}`;
  });
  const projectPages = getDynamicPaths("data/project").map((projectPath) => {
    return `${baseUrl}/project/${projectPath}`;
  });

  const dynamicPages = blogPages.concat(projectPages);

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
            <loc>${baseUrl}</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>monthly</changefreq>
            <priority>1.0</priority>
        </url>
      ${staticPages
        .map((url) => {
          const route = url.replace(".js", "");
          return `
            <url>
              <loc>${route}</loc>
              <changefreq>monthly</changefreq>
              <priority>0.8</priority>
            </url>
          `;
        })
        .join("")}
        ${dynamicPages
          .map((url) => {
            return `
             <url>
                <loc>${url}</loc>
                <changefreq>monthly</changefreq>
                <priority>0.8</priority>
             </url>
            `;
          })
          .join("")}
    </urlset>
  `;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
