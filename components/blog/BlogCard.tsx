"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "../ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import { BlogPost } from "@/types/blog";

interface CardProps {
  index: number;
  post: BlogPost;
  priority?: boolean;
}

export default function BlogCard({ index, post, priority = false }: CardProps) {
  // Use ISO string for initial render to match server
  const [formattedDate, setFormattedDate] = useState(
    post.date ? new Date(post.date).toISOString().split("T")[0] : "",
  );

  // After hydration, format the date with locale settings
  useEffect(() => {
    if (post.date) {
      setFormattedDate(
        new Date(post.date).toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        }),
      );
    }
  }, [post.date]);

  return (
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
            width={484}
            height={323}
            priority={priority ? index < 6 : false}
          />
        </div>
      </div>

      <div>
        <Badge
          variant="outline"
          className="border-support text-support lg:text-sm"
        >
          <span className="text-support-dark3">{post.category}</span>
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
          <AvatarImage
            src="https://shadcnblocks.com/images/block/avatar-1.webp"
            alt={post.author}
          />
          <AvatarFallback>JB</AvatarFallback>
        </Avatar>
        <div className="flex flex-col gap-px">
          <span className="text-xs font-medium">{post.author}</span>
          <span className="text-xs text-muted-foreground">{formattedDate}</span>
        </div>
      </div>
    </Link>
  );
}
