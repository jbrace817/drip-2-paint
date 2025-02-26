import { notFound } from "next/navigation";
import { getFileBySlug } from "@/lib/markdown";
import Image from "next/image";
import ContentRenderer from "@/components/content/ContentRenderer";
import {
  ExtractedContent,
  extractFirstElements,
} from "@/components/content/extractMarkdownSections";

async function AboutPage() {
  const page = await getFileBySlug("pages", "about");

  if (!page) return notFound;

  const extractedContent: ExtractedContent = extractFirstElements(page.content);

  const { firstHeading, restOfContent } = extractedContent;

  return (
    <main className="py-0 md:px-4 xl:px-6">
      <div className="rounded-lg bg-gradient-to-b from-coolGray-light2 from-80% to-white px-4 pb-14">
        <h1 className="py-14 text-center text-4xl font-medium md:py-16 md:text-5xl">
          {page.frontmatter.title}
        </h1>
        <div className="container relative mx-auto aspect-video max-w-screen-xl lg:aspect-[5/2]">
          <Image
            src={page.frontmatter.image}
            alt="About Drip 2 Paint"
            fill
            className="rounded-md object-cover"
            priority
          />
        </div>
      </div>
      <section className="container mx-auto max-w-screen-xl">
        <div className="px-4">
          <ContentRenderer
            firstHeading={firstHeading}
            restOfContent={restOfContent}
          />
        </div>
      </section>
    </main>
  );
}

export default AboutPage;
