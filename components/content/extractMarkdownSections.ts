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

  // Scan for the headings and first paragraph, but don't modify the content
  for (let i = 0; i < paragraphs.length; i++) {
    const trimmed = paragraphs[i].trim();

    if (!firstHeading && trimmed.match(/^##\s/)) {
      firstHeading = trimmed.replace(/^##\s*/, ""); // Capture first heading
    }

    if (
      !firstParagraph &&
      trimmed !== "" &&
      !trimmed.startsWith("#") &&
      !trimmed.startsWith("-")
    ) {
      firstParagraph = trimmed; // Capture first paragraph for potential summary use
    }

    if (/^###\s(?!#)/.test(trimmed)) {
      allH3Headings.push(trimmed.replace(/^###\s*/, "")); // Strip '###' and space
    }
  }

  return {
    firstHeading,
    firstParagraph,
    restOfContent: content, // Return the unmodified content
    allH3Headings,
  };
}
