// /app/blog/[slug]/page.tsx

import { getFileBySlug, getAllFiles } from "@/utils/markdown";

// Define the type for blog post metadata
interface BlogPost {
  slug: string;
  frontmatter: {
    title: string;
    date?: string;
  };
  content: string;
}

// This function generates static params for each blog post
export async function generateStaticParams() {
  const posts = getAllFiles("blog") as BlogPost[];
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  // Fetch the individual blog post by slug
  const post = getFileBySlug("blog", params.slug) as BlogPost;

  return (
    <div>
      <h1>{post.frontmatter.title}</h1>
      <p>{post.frontmatter.date}</p>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
}
