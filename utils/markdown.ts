import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

// Define the base content directory (used for blog, authors, etc.)
const contentDirectory = path.join(process.cwd(), "content", "blog");

// Fetch all files from a given collection (blog, authors, etc.)
export function getAllFiles(collection: string) {
  const dir = path.join(contentDirectory, collection); // Reference contentDirectory here
  console.log("Reading directory:", dir); // Check the directory being read

  // Ensure the directory exists
  if (!fs.existsSync(dir)) {
    console.error(`Directory not found: ${dir}`);
    return [];
  }

  const filenames = fs.readdirSync(dir);
  console.log("Files found:", filenames); // Log files found in the directory

  // Return the list of files with frontmatter data
  return filenames.map((filename) => {
    const filePath = path.join(dir, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);

    return {
      slug: filename.replace(".md", ""),
      ...data,
    };
  });
}

// Fetch a single file by slug from a given collection
export function getFileBySlug(collection: string, slug: string) {
  const filePath = path.join(contentDirectory, collection, `${slug}.md`); // Use contentDirectory here
  console.log("Reading file:", filePath); // Check the file being read

  // Ensure the file exists
  if (!fs.existsSync(filePath)) {
    console.error(`File not found: ${filePath}`);
    return null;
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    frontmatter: data,
    content: marked(content),
  };
}
