export interface ExtractedContent {
  firstHeading: string;
  firstParagraph: string;
  restOfContent: string;
  allH3Headings: string[];
}

export function extractFirstElements(content: string): ExtractedContent {
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
