// /app/blog/page.tsx

import { getAllFiles } from "@/utils/markdown";
import Link from "next/link";

// Define the type for the blog post metadata
interface BlogPost {
  slug: string;
  title: string;
  date?: string;
}

export default async function BlogPage() {
  // Fetch all blog posts
  const posts = getAllFiles("blog") as BlogPost[];

  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {posts.length > 0 ? (
          posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </li>
          ))
        ) : (
          <li>No posts available.</li>
        )}
      </ul>
    </div>
  );
}
