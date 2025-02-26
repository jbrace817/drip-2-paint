import { notFound } from "next/navigation";
import { getFileBySlug, getAllFiles } from "@/lib/markdown";
import Image from "next/image";
import PageNav from "@/components/content/PageNav";
import ContentRenderer from "@/components/content/ContentRenderer";
import ServiceCTA from "@/components/services/CTA/ServiceCTA";
import ServicesGallery from "@/components/services/Gallery/ServicesGallery";
import {
  ExtractedContent,
  extractFirstElements,
} from "@/components/content/extractMarkdownSections";

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const pages = getAllFiles("pages"); // Get all pages from Decap
  return pages.map((page) => ({ slug: page.slug }));
}

export default async function Page({ params }: PageProps) {
  const { slug } = params;
  const page = await getFileBySlug("pages", slug); // ✅ Await the async function

  if (!page) return notFound();

  const extractedContent: ExtractedContent = extractFirstElements(page.content);

  const { firstParagraph, restOfContent, firstHeading, allH3Headings } =
    extractedContent;

  return (
    <main className="py-0 md:px-4 xl:px-6">
      <div className="rounded-lg bg-gradient-to-b from-coolGray-light2 from-80% to-white px-4 pb-14">
        <h1 className="py-14 text-center text-4xl font-medium md:py-16 md:text-5xl">
          {page.frontmatter.title}
        </h1>
        <div className="container relative mx-auto aspect-video max-w-screen-xl lg:aspect-[5/2]">
          <Image
            src={page.frontmatter.image}
            alt="placeholder"
            fill
            className="rounded-md object-cover"
            priority
          />
        </div>
      </div>
      <section className="container mx-auto max-w-screen-xl">
        <div className="relative grid-cols-3 gap-20 px-4 lg:grid">
          <div className="lg:col-span-2">
            <ContentRenderer
              firstHeading={firstHeading}
              firstParagraph={firstParagraph}
              restOfContent={restOfContent}
              allH3Headings={allH3Headings}
              badge={page.frontmatter.badge}
            />
          </div>
          <PageNav sections={allH3Headings} />
        </div>
      </section>
      <ServiceCTA />
      <ServicesGallery gallery={page.frontmatter.gallery} />
    </main>
  );
}
