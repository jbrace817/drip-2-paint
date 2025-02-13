import { notFound } from "next/navigation";
import { getFileBySlug, getAllFiles } from "@/utils/markdown";
import ReactMarkdown from "react-markdown";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import PageNav from "@/components/PageNav";

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
  const page = getFileBySlug("pages", slug); // Fetch page content

  if (!page) return notFound(); // Show 404 if page doesn't exist

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
            <div>
              <Badge
                variant="outline"
                className="border-support text-support lg:text-sm"
              >
                Protect, Enhance, Impress
              </Badge>
              {firstHeading && (
                <ReactMarkdown className="mt-3 text-pretty text-3xl font-semibold tracking-tight sm:text-4xl">
                  {firstHeading}
                </ReactMarkdown>
              )}
              {firstParagraph && (
                <p className="mt-6 text-xl/8 text-coolGray-dark2">
                  {firstParagraph}
                </p>
              )}
            </div>

            <ReactMarkdown
              // remarkPlugins={[remarkGfm]}
              className="prose prose-lg max-w-none"
              components={{
                h3: ({ children }) => (
                  <h3 className="mt-16 scroll-m-24 text-pretty text-2xl font-semibold tracking-tight sm:text-3xl">
                    {children}
                  </h3>
                ),
                h4: ({ children }) => (
                  <h4 className="mt-4 text-pretty text-xl font-semibold tracking-tight sm:text-2xl">
                    {children}
                  </h4>
                ),
                ol: ({ children }) => (
                  <ol className="ml-2 mt-2 list-inside list-decimal space-y-4 text-coolGray-dark2">
                    {children}
                  </ol>
                ),
                ul: ({ children }) => (
                  <ul className="ml-2 mt-2 list-inside list-disc space-y-2 text-coolGray-dark2">
                    {children}
                  </ul>
                ),
                p: ({ children }) => <p className="mt-6">{children}</p>,
              }}
            >
              {restOfContent}
              {/* {page.content} */}
            </ReactMarkdown>
          </div>
          <PageNav sections={allH3Headings} />
        </div>
      </section>
    </main>
  );
}
