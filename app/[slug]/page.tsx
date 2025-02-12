import { notFound } from "next/navigation";
import { getFileBySlug, getAllFiles } from "@/utils/markdown";
import ReactMarkdown from "react-markdown";
// import remarkGfm from "remark-gfm"; // For GitHub-flavored markdown

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const pages = getAllFiles("pages"); // Get all pages from Decap
  return pages.map((page) => ({ slug: page.slug }));
}

export default async function Page({ params }: PageProps) {
  const { slug } = params;
  const page = getFileBySlug("pages", slug); // Fetch page content

  if (!page) return notFound(); // Show 404 if page doesn't exist

  return (
    <main className="py-0 md:px-4">
      <div className="rounded-lg bg-gradient-to-b from-coolGray-light2 from-80% to-white px-4 pb-14">
        <h1 className="py-14 text-center text-4xl font-medium md:py-16 md:text-5xl">
          {page.frontmatter.title}
        </h1>
      </div>
      <ReactMarkdown
        // remarkPlugins={[remarkGfm]}
        className="prose prose-lg max-w-none space-y-4"
      >
        {page.content}
      </ReactMarkdown>
    </main>
  );
}
