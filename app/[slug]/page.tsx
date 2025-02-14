import { notFound } from "next/navigation";
import { getFileBySlug, getAllFiles } from "@/utils/markdown";
import Image from "next/image";
import PageNav from "@/components/PageNav";
import ContentRenderer from "@/components/ContentRenderer";

// import remarkGfm from "remark-gfm"; // For GitHub-flavored markdown

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const pages = getAllFiles("pages"); // Get all pages from Decap
  return pages.map((page) => ({ slug: page.slug }));
}

// Extract the first paragraph
function extractFirstElements(content: string) {
  const paragraphs = content.split(/\n\s*\n/); // Split by double newline
  let firstHeading = "";
  let firstParagraph = "";
  const allH3Headings: string[] = [];
  let restOfContent = content;

  for (let i = 0; i < paragraphs.length; i++) {
    const trimmed = paragraphs[i].trim();

    if (!firstHeading && trimmed.startsWith("#")) {
      firstHeading = trimmed; // Capture first heading
      continue;
    }

    if (!firstParagraph && trimmed !== "" && !trimmed.startsWith("-")) {
      firstParagraph = trimmed; // Capture first paragraph
      restOfContent = paragraphs.slice(i + 1).join("\n\n"); // Remaining content
    }

    if (/^###\s(?!#)/.test(trimmed)) {
      allH3Headings.push(trimmed.replace(/^###\s*/, "")); // Strip '###' and space
    }
  }

  return { firstHeading, firstParagraph, restOfContent, allH3Headings };
}

export default async function Page({ params }: PageProps) {
  const { slug } = params;
  const page = await getFileBySlug("pages", slug); // ✅ Await the async function

  if (!page) return notFound();

  const { firstParagraph, restOfContent, firstHeading, allH3Headings } =
    extractFirstElements(page.content);

  return (
    <main className="py-0 md:px-4">
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
            />
          </div>
          <PageNav sections={allH3Headings} />
        </div>
      </section>
    </main>
  );
}
