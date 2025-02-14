import { getFileBySlug, getAllFiles } from "@/utils/markdown";
import ReactMarkdown from "react-markdown";

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
  const post = (await getFileBySlug("blog", params.slug)) as BlogPost;

  // Format the date for display
  const formattedDate = post.frontmatter.date
    ? new Date(post.frontmatter.date).toLocaleDateString()
    : "No date provided";

  return (
    <div>
      <h1>{post.frontmatter.title}</h1>
      <p>{formattedDate}</p>
      {/* Use react-markdown to safely render Markdown content */}
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </div>
  );
}
