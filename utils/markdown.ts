import fs from "fs";
import path from "path";
import matter from "gray-matter";

// Fetch all files from the blog collection
export function getAllFiles(collection: string) {
  const dir = path.join(process.cwd(), "content", collection);
  console.log("Reading directory:", dir); // Debugging

  if (!fs.existsSync(dir)) {
    console.error(`Directory not found: ${dir}`);
    return [];
  }

  const filenames = fs.readdirSync(dir);
  console.log("Files found:", filenames); // Debugging

  return filenames.map((filename) => {
    const filePath = path.join(dir, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents); // Only extract frontmatter

    return {
      slug: filename.replace(".md", ""),
      ...data,
    };
  });
}

// Fetch a single blog post by slug
export function getFileBySlug(collection: string, slug: string) {
  const filePath = path.join(
    process.cwd(),
    "content",
    collection,
    `${slug}.md`,
  );
  console.log("Reading file:", filePath); // Debugging

  if (!fs.existsSync(filePath)) {
    console.error(`File not found: ${filePath}`);
    return null;
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents); // No conversion to HTML

  return {
    slug,
    frontmatter: data,
    content, // Keep raw Markdown
  };
}
