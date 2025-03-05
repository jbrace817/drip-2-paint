"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "../ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
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
          <Link
            key={index}
            href={`/blog/${post.slug}`}
            className="group flex flex-col"
          >
            <div className="mb-4 flex overflow-clip rounded-xl md:mb-5">
              <div className="aspect-[3/2] transition duration-300 group-hover:scale-105">
                <Image
                  src={post.image}
                  alt={post.title}
                  placeholder="blur"
                  blurDataURL={post.image}
                  className="aspect-[3/2] object-cover object-center"
                  width={1920}
                  height={1080}
                  priority={index < 6}
                />
              </div>
            </div>

            <div>
              <Badge
                variant="outline"
                className="border-support text-support lg:text-sm"
              >
                {post.category}
              </Badge>
            </div>
            <div className="mb-2 line-clamp-3 break-words pt-4 text-lg font-medium md:mb-3 md:pt-4 md:text-2xl lg:pt-4 lg:text-3xl">
              {post.title}
            </div>
            <div className="mb-4 line-clamp-2 text-sm text-muted-foreground md:mb-5 md:text-base">
              {post.content}
            </div>
            <div className="flex items-center gap-2">
              <Avatar className="size-12">
                <AvatarImage src="https://shadcnblocks.com/images/block/avatar-1.webp" />
                <AvatarFallback>JB</AvatarFallback>
              </Avatar>
              <div className="flex flex-col gap-px">
                <span className="text-xs font-medium">{post.author}</span>
                <span className="text-xs text-muted-foreground">
                  {post.date?.toLocaleDateString()}
                </span>
              </div>
            </div>
          </Link>
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
