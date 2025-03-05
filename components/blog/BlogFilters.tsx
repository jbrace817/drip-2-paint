import { Badge } from "../ui/badge";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

interface BlogFiltersProps {
  categories: string[];
  onCategoryChange: (category: string | null) => void;
  onSortChange: (sortOption: string) => void;
}

export function BlogFilters({
  categories,
  onCategoryChange,
  onSortChange,
}: BlogFiltersProps) {
  return (
    <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
      <div className="flex flex-wrap gap-2">
        <Badge
          variant="outline"
          className="cursor-pointer hover:bg-accent"
          onClick={() => onCategoryChange(null)}
        >
          All
        </Badge>
        {categories.map((category) => (
          <Badge
            key={category}
            variant="outline"
            className="cursor-pointer hover:bg-accent"
            onClick={() => onCategoryChange(category)}
          >
            {category}
          </Badge>
        ))}
      </div>
      <Select onValueChange={onSortChange} defaultValue="newest">
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Sort</SelectLabel>
            <SelectItem value="newest">Newest First</SelectItem>
            <SelectItem value="oldest">Oldest First</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
