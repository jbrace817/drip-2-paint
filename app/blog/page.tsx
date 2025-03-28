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
        <div className="mb-8 max-w-2xl text-pretty md:mb-14 md:max-w-md lg:mb-16 lg:max-w-2xl">
          <div className="flex items-start justify-between gap-8">
            <div>
              <p className="inline-block bg-gradient-to-r from-primary-light4 to-primary-dark2 bg-clip-text text-xl/7 font-semibold text-transparent">
                Blog
              </p>
              <h2 className="mb-4 text-pretty text-3xl font-medium text-coolGray-dark5 md:mb-5 lg:mb-6 lg:text-5xl">
                Splashes of Creativity
              </h2>
            </div>
          </div>
          <p>
            Every brushstroke tells a story. Explore ideas, techniques, and
            trends to transform your home with color.
          </p>
        </div>
        <BlogCards initialPosts={validPosts} />
      </div>
    </main>
  );
}
