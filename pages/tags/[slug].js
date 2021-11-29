import Container from "@/components/container/Container";

import { getPostsByTag, getAllTags } from "@/lib/api";

export default function Tag({ allPosts, tag }) {
  return (
    <Container>
      <h2 className="mb-8 text-6xl md:text-7xl font-heading font-bold tracking-tighter leading-tight">
        🏷️ #{tag}
      </h2>

      {allPosts.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-8 gap-y-5 md:gap-y-8 mb-16">
          {allPosts.map((post) => (
            <PostCard
              key={post.slug}
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              author={post.author}
              slug={post.slug}
              excerpt={post.excerpt}
              tags={post.tags}
              lang="id"
            />
          ))}
        </div>
      )}
    </Container>
  );
}

export async function getStaticProps({ params }) {
  const allPosts = await getPostsByTag(params.tag, "id");
  return {
    props: {
      allPosts,
      tag: params.tag,
    },
    revalidate: 3,
  };
}

export async function getStaticPaths() {
  const tags = await getAllTags("id");

  return {
    paths: tags.map((tag) => {
      return {
        params: {
          tag: tag,
        },
      };
    }),
    fallback: false,
  };
}
