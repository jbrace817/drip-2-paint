import BlogCards from "@/components/blog/BlogCards";
import { extractFirstWords } from "@/lib/utils";
import { getAllFiles, getFileBySlug } from "@/lib/markdown";
import { BlogPost } from "@/types/blog";

export default async function BlogList() {
  const posts = await Promise.all(
    getAllFiles("blog").map(async ({ slug }) => {
      const post = await getFileBySlug("blog", slug);
      if (!post) return null;

      return {
        slug,
        title: post.frontmatter.title,
        date: post.frontmatter.date,
        author: post.frontmatter.author,
        image: post.frontmatter.image,
        category: post.frontmatter.category,
        content: extractFirstWords(post.content),
      };
    }),
  );

  // Filter out any null values and explicitly type the array
  const validPosts = posts.filter((post): post is BlogPost => post !== null);

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
