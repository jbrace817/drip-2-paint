import { getAllFiles, getFileBySlug } from "@/lib/markdown";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "../ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";

// Define the type for the blog post metadata
interface BlogList {
  slug: string;
  title: string;
  date?: Date;
  author: string;
  image: string;
  category: string;
  content: string;
  frontmatter: {
    title: string;
    date: string;
    author: string;
    image: string;
    category: string;
  };
}

// Helper function to extract the first 200 words
const extractFirstWords = (
  content: string,
  wordCount: number = 200,
): string => {
  if (!content) return "";

  // Step 1: First remove all heading lines completely
  let cleanContent = content
    .split("\n")
    .filter((line) => !line.trim().match(/^#{1,6}\s+/))
    .join("\n");

  // Step 2: Further clean the content
  cleanContent = cleanContent
    .replace(/!\[.*?\]\(.*?\)/g, "") // Remove images
    .replace(/\[.*?\]\(.*?\)/g, "") // Remove links
    .replace(/<.*?>/g, "") // Remove HTML tags
    .replace(/[*_`]/g, "") // Remove markdown formatting characters
    .replace(/\s+/g, " ") // Normalize whitespace
    .trim();

  // Split into words and take first 200
  const words = cleanContent.split(/\s+/);
  const truncated = words.slice(0, wordCount).join(" ");

  return words.length > wordCount ? `${truncated}...` : truncated;
};

export default async function BlogCards() {
  // Fetch all blog posts
  const posts = (await Promise.all(
    getAllFiles("blog").map(async ({ slug }) => {
      const fullPost = await getFileBySlug("blog", slug);
      if (!fullPost) {
        return {
          slug,
          content: "",
          title: "Untitled",
          date: undefined,
          author: "Unknown",
          image: "",
          category: "Uncategorized",
          frontmatter: {
            title: "",
            date: "",
            author: "",
            image: "",
            category: "",
          },
        };
      }
      return {
        slug,
        content: extractFirstWords(fullPost.content),
        title: fullPost.frontmatter.title,
        date: fullPost.frontmatter.date
          ? new Date(fullPost.frontmatter.date)
          : undefined,
        author: fullPost.frontmatter.author,
        image: fullPost.frontmatter.image,
        category: fullPost.frontmatter.category,
        frontmatter: fullPost.frontmatter,
      };
    }),
  )) as BlogList[];

  return (
    <section>
      <div className="grid gap-x-4 gap-y-8 md:grid-cols-2 lg:gap-x-6 lg:gap-y-12 2xl:grid-cols-3">
        {posts.map((post, index) => (
          <Link
            key={index}
            href={`/blog/${post.slug}`}
            className="group flex flex-col"
          >
            <div className="mb-4 flex overflow-clip rounded-xl md:mb-5">
              <div className="aspect-[3/2] transition duration-300 group-hover:scale-105">
                <Image
                  src={post.image}
                  alt={post.title}
                  placeholder="blur"
                  blurDataURL={post.image}
                  className="aspect-[3/2] object-cover object-center"
                  width={1920}
                  height={1080}
                  priority={index < 6}
                />
              </div>
            </div>

            <div>
              <Badge
                variant="outline"
                className="border-support text-support lg:text-sm"
              >
                {post.category}
              </Badge>
            </div>
            <div className="mb-2 line-clamp-3 break-words pt-4 text-lg font-medium md:mb-3 md:pt-4 md:text-2xl lg:pt-4 lg:text-3xl">
              {post.title}
            </div>
            <div className="mb-4 line-clamp-2 text-sm text-muted-foreground md:mb-5 md:text-base">
              {post.content}
            </div>
            <div className="flex items-center gap-2">
              <Avatar className="size-12">
                <AvatarImage src="https://shadcnblocks.com/images/block/avatar-1.webp" />
                <AvatarFallback>JB</AvatarFallback>
              </Avatar>
              <div className="flex flex-col gap-px">
                <span className="text-xs font-medium">{post.author}</span>
                <span className="text-xs text-muted-foreground">
                  {post.date?.toLocaleDateString()}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
