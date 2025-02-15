"use client";

import React, { useRef } from "react";
import ReactMarkdown from "react-markdown";
import { Badge } from "@/components/ui/badge";

interface ContentRendererProps {
  firstHeading: string;
  firstParagraph: string;
  restOfContent: string;
  allH3Headings: string[];
}

export default function ContentRenderer({
  firstHeading,
  firstParagraph,
  restOfContent,
}: ContentRendererProps) {
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const addSectionRef = (id: string, ref: HTMLElement | null) => {
    if (ref) {
      sectionRefs.current[id] = ref;
    }
  };

  return (
    <main>
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
        <p className="mt-6 text-xl/8 text-coolGray-dark2">{firstParagraph}</p>
      )}

      <ReactMarkdown
        className="prose prose-lg max-w-none"
        components={{
          h3: ({ children }) => {
            const sectionId = children
              ? children.toString().toLowerCase().replace(/\s+/g, "-")
              : "";
            return (
              <h3
                id={sectionId}
                ref={(ref) => addSectionRef(sectionId, ref)}
                className="mt-16 scroll-m-24 text-pretty text-2xl font-semibold tracking-tight sm:text-3xl"
              >
                {children}
              </h3>
            );
          },
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
      </ReactMarkdown>
    </main>
  );
}
