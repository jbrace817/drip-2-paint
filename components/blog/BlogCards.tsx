"use client";
import { useState, useEffect, useRef } from "react";
import { BlogFilters } from "./BlogFilters";
import { BlogPost } from "@/types/blog";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import BlogCard from "./BlogCard";

const POSTS_PER_PAGE = 9;

export default function BlogCards({
  initialPosts,
}: {
  initialPosts: BlogPost[];
}) {
  const [filteredPosts, setFilteredPosts] = useState(initialPosts);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [sortOption, setSortOption] = useState("newest");
  const [currentPage, setCurrentPage] = useState(1);
  const previousPageRef = useRef<number>(1);

  // Extract unique categories
  const categories = Array.from(
    new Set(initialPosts.map((post) => post.category)),
  );

  // Apply filters and sort
  useEffect(() => {
    let result = [...initialPosts];

    // Apply category filter
    if (activeCategory) {
      result = result.filter((post) => post.category === activeCategory);
    }

    // Apply sort
    result = result.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);

      return sortOption === "newest"
        ? dateB.getTime() - dateA.getTime()
        : dateA.getTime() - dateB.getTime();
    });

    setFilteredPosts(result);
  }, [initialPosts, activeCategory, sortOption]);

  // Pagination logic
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE,
  );

  // Generate page numbers
  const getPageNumbers = () => {
    const pages = [];

    // Always show first page
    pages.push(1);

    // Current page neighborhood
    for (
      let i = Math.max(2, currentPage - 1);
      i <= Math.min(totalPages - 1, currentPage + 1);
      i++
    ) {
      if (i === 2 && currentPage > 3) {
        pages.push("ellipsis-start");
      } else {
        pages.push(i);
      }
    }

    // Always show last page for larger lists
    if (totalPages > 1) {
      if (currentPage < totalPages - 2) {
        pages.push("ellipsis-end");
      }
      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <section>
      <BlogFilters
        categories={categories}
        onCategoryChange={setActiveCategory}
        onSortChange={setSortOption}
        activeCategory={activeCategory}
        onChangePage={setCurrentPage}
        currentPage={currentPage}
        previousPageRef={previousPageRef}
      />
      <div className="grid gap-x-4 gap-y-8 md:grid-cols-2 lg:gap-x-6 lg:gap-y-12 2xl:grid-cols-3">
        {paginatedPosts.map((post, index) => (
          <BlogCard key={index} index={index} post={post} />
        ))}
      </div>
      {totalPages > 1 && (
        <div className="mt-10 flex justify-center">
          <Pagination>
            <PaginationContent>
              {currentPage > 1 && (
                <PaginationItem>
                  <PaginationPrevious
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrentPage(currentPage - 1);
                      window.scrollTo(0, 0);
                    }}
                  />
                </PaginationItem>
              )}

              {getPageNumbers().map((page, i) => (
                <PaginationItem key={i}>
                  {page === "ellipsis-start" || page === "ellipsis-end" ? (
                    <PaginationEllipsis />
                  ) : (
                    <PaginationLink
                      href="#"
                      isActive={page === currentPage}
                      onClick={(e) => {
                        e.preventDefault();
                        setCurrentPage(page as number);
                        window.scrollTo(0, 0);
                      }}
                    >
                      {page}
                    </PaginationLink>
                  )}
                </PaginationItem>
              ))}

              {currentPage < totalPages && (
                <PaginationItem>
                  <PaginationNext
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrentPage(currentPage + 1);
                      window.scrollTo(0, 0);
                    }}
                  />
                </PaginationItem>
              )}
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </section>
  );
}
