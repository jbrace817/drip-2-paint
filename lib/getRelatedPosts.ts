import { extractFirstWords } from "@/lib/utils";
import { getAllFiles, getFileBySlug } from "@/lib/markdown";
import { BlogPost } from "@/types/blog";

export async function getRelatedPosts(
  currentSlug?: string,
  category?: string,
  limit = 5,
): Promise<BlogPost[]> {
  console.log("getRelatedPosts called with:", { currentSlug, category, limit });

  try {
    const files = getAllFiles("blog");
    console.log("Found files:", files.length);

    const posts = await Promise.all(
      files.map(async ({ slug }) => {
        try {
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
        } catch (error) {
          console.error(`Error processing post ${slug}:`, error);
          return null;
        }
      }),
    );

    console.log("Posts before filtering:", posts.length);

    // Filter out null values and optionally the current post
    const validPosts = posts.filter(
      (post): post is BlogPost =>
        post !== null && (currentSlug ? post.slug !== currentSlug : true),
    );

    console.log("Valid posts after filtering:", validPosts.length);

    // Sort all posts by date (newest first)
    validPosts.sort((a, b) => {
      const dateA = a.date ? new Date(a.date).getTime() : 0;
      const dateB = b.date ? new Date(b.date).getTime() : 0;
      return dateB - dateA;
    });

    // If category is provided, prioritize posts from that category
    if (category) {
      const sameCategoryPosts = validPosts.filter(
        (post) => post.category === category,
      );

      console.log(`Posts in category "${category}":`, sameCategoryPosts.length);

      // If we have enough posts in the same category, return them
      if (sameCategoryPosts.length >= limit) {
        return sameCategoryPosts.slice(0, limit);
      }

      // Otherwise, fill with posts from other categories
      const otherPosts = validPosts.filter(
        (post) => post.category !== category,
      );
      const result = [...sameCategoryPosts, ...otherPosts].slice(0, limit);
      console.log("Returning mixed posts:", result.length);
      return result;
    }

    // If no category provided, just return the newest posts
    const result = validPosts.slice(0, limit);
    console.log("Returning newest posts:", result.length);
    return result;
  } catch (error) {
    console.error("Error in getRelatedPosts:", error);
    return [];
  }
}
