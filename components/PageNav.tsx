"use client";

import { useState, useEffect, useRef } from "react";
import { AlignLeft } from "lucide-react";
import { cn } from "@/lib/utils";

interface PageNavProps {
  sections: string[];
  //   addSectionRef: (id: string, ref: HTMLElement | null) => void; // Accept addSectionRef as a prop
}

function PageNav({ sections }: PageNavProps) {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const sectionRefs = useRef<Record<string, HTMLElement>>({});

  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: "-96px 0px 0px 0px",
      threshold: 1,
    });

    sections.forEach((sectionId) => {
      const element = sectionRefs.current[sectionId];
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [sections]);

  const addSectionRef = (id: string, ref: HTMLElement | null) => {
    if (ref) {
      sectionRefs.current[id] = ref;
    }
  };

  return (
    <div className="sticky top-24 hidden h-fit lg:block">
      <span className="flex items-center gap-2 text-sm">
        <AlignLeft className="h-4 w-4" />
        On this page
      </span>
      <nav className="mt-2 text-sm">
        <ul>
          {sections.map((section, index) => (
            <li key={index}>
              <a
                href={`#${section}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(section)?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
                className={cn(
                  "block py-1 transition-colors duration-200",
                  activeSection === section
                    ? "font-medium text-primary"
                    : "text-muted-foreground hover:text-primary",
                )}
              >
                {section}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default PageNav;
