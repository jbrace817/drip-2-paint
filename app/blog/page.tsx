import BlogCards from "@/components/blog/BlogCards";
import { getRelatedPosts } from "@/lib/getRelatedPosts";

export default async function BlogList() {
  // Get all blog posts
  const posts = await getRelatedPosts("", "", Infinity);

  // Ensure date objects are properly serialized for client components
  const validPosts = posts.map((post) => ({
    ...post,
    // Convert Date objects to ISO strings for consistent handling between server and client
    date: post.date ? new Date(post.date).toISOString() : "",
  }));

  return (
    <main className="py-14 md:py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8 md:mb-14 lg:mb-16">
          <div className="flex items-start justify-between gap-8">
            <div>
              <p className="text-wider mb-4 text-sm font-medium text-muted-foreground">
                Eyebrow
              </p>
              <h2 className="mb-4 w-full text-4xl font-medium md:mb-5 md:text-5xl lg:mb-6 lg:text-6xl">
                Blog
              </h2>
            </div>
          </div>
          <p>Duis sem sem, gravida vel porttitor eu, volutpat ut arcu</p>
        </div>
        <BlogCards initialPosts={validPosts} />
      </div>
    </main>
  );
}
