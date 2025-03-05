import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Helper function to extract the first 200 words
export const extractFirstWords = (
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
