import { getFileBySlug, getAllFiles } from "@/lib/markdown";
import { Button } from "@/components/ui/button";
import { Facebook, Linkedin, Twitter } from "lucide-react";
import { BlogPost as BaseBlogPost } from "@/types/blog";
import Image from "next/image";
import { ContentProps } from "@/types/content";
import {
  ExtractedContent,
  extractFirstElements,
} from "@/components/content/extractMarkdownSections";
import ContentRenderer from "@/components/content/ContentRenderer";
import PageNav from "@/components/content/PageNav";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import Testimonial from "@/components/testimonials/Testimonial";
import { getRelatedPosts } from "@/lib/getRelatedPosts";
import BlogCarousel from "@/components/blog/BlogCarousel";

interface BlogPost extends BaseBlogPost {
  frontmatter: {
    title: string;
    date?: string;
    image: string;
    category: string;
    author: string;
  };
}

// This function generates static params for each blog post
export async function generateStaticParams() {
  const posts = getAllFiles("blog") as BlogPost[];
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: ContentProps) {
  // Fetch the individual blog post by slug
  const post = (await getFileBySlug("blog", params.slug)) as BlogPost;

  // Format the date for display
  const formattedDate = post.frontmatter.date
    ? new Date(post.frontmatter.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "No date provided";

  //Extract content from markdown
  const extractedContent: ExtractedContent = extractFirstElements(post.content);

  const { firstParagraph, restOfContent, firstHeading, allH3Headings } =
    extractedContent;

  // Get related posts based on category
  const relatedPosts = await getRelatedPosts(
    params.slug,
    post.frontmatter.category,
    5,
  );

  return (
    <main className="py-0 md:px-4 xl:px-6">
      <div className="rounded-lg bg-gradient-to-b from-coolGray-light2 from-80% to-white px-4 pb-14">
        <h1 className="mx-auto text-pretty py-14 text-center text-4xl font-medium md:py-16 md:text-5xl xl:max-w-4xl">
          {post.frontmatter.title}
        </h1>
        <div className="container relative mx-auto aspect-video max-w-screen-xl lg:aspect-[5/2]">
          <Image
            src={post.frontmatter.image}
            alt="placeholder"
            fill
            className="rounded-md object-cover"
            priority
          />
        </div>
      </div>
      <section className="container mx-auto max-w-screen-xl">
        <div className="flex items-center gap-3 px-4 text-sm md:text-base">
          <Avatar className="h-8 w-8 border">
            <AvatarImage src="https://shadcnblocks.com/images/block/avatar-1.webp" />
          </Avatar>
          <span>
            <a href="#" className="font-medium">
              By {post.frontmatter.author}
            </a>
            <span className="ml-1 text-muted-foreground">
              on {formattedDate}
            </span>
          </span>
        </div>
        <div className="mt-3 flex flex-col gap-2 px-4 lg:order-none lg:mt-9">
          <p className="font-medium text-muted-foreground">
            Share this article:
          </p>
          <ul className="mb-11 flex gap-2 border-b pb-8">
            <li>
              <Button
                variant="secondary"
                size="icon"
                className="group rounded-full"
              >
                <a href="#">
                  <Facebook className="h-4 w-4 fill-muted-foreground text-muted-foreground transition-colors group-hover:fill-primary group-hover:text-primary" />
                </a>
              </Button>
            </li>
            <li>
              <Button
                variant="secondary"
                size="icon"
                className="group rounded-full"
              >
                <a href="#">
                  <Linkedin className="h-4 w-4 fill-muted-foreground text-muted-foreground transition-colors group-hover:fill-primary group-hover:text-primary" />
                </a>
              </Button>
            </li>
            <li>
              <Button
                variant="secondary"
                size="icon"
                className="group rounded-full"
              >
                <a href="#">
                  <Twitter className="h-4 w-4 fill-muted-foreground text-muted-foreground transition-colors group-hover:fill-primary group-hover:text-primary" />
                </a>
              </Button>
            </li>
          </ul>
        </div>
        <div className="relative grid-cols-3 gap-20 px-4 lg:grid">
          <div className="lg:col-span-2">
            <ContentRenderer
              firstHeading={firstHeading}
              firstParagraph={firstParagraph}
              restOfContent={restOfContent}
              allH3Headings={allH3Headings}
              badge={post.frontmatter.category}
            />
          </div>
          <PageNav sections={allH3Headings} />
        </div>
      </section>
      <Testimonial />
      {relatedPosts.length >= 3 && <BlogCarousel initialPosts={relatedPosts} />}
    </main>
  );
}
