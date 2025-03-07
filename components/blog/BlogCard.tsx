import Image from "next/image";
import Link from "next/link";
import { Badge } from "../ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import { BlogPost } from "@/types/blog";

interface CardProps {
  index: number;
  post: BlogPost;
}

export default function BlogCard({ index, post }: CardProps) {
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
  );
}
