import { MutableRefObject } from "react";
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
  activeCategory: string | null;
  onChangePage: (currentPage: number) => void;
  currentPage: number;
  previousPageRef: MutableRefObject<number>;
}

export function BlogFilters({
  categories,
  onCategoryChange,
  onSortChange,
  activeCategory,
  onChangePage,
  currentPage,
  previousPageRef,
}: BlogFiltersProps) {
  const applyFilter = () => {
    previousPageRef.current = currentPage; // Save the page before filtering
    onChangePage(1); // Go to page 1 for filtered results
  };

  const clearFilter = () => {
    onChangePage(previousPageRef.current); // Restore the previous page
  };

  return (
    <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
      <div className="flex flex-wrap gap-2">
        <Badge
          variant="outline"
          className={`cursor-pointer hover:border-primary hover:bg-primary-light1 ${activeCategory === null && "border-primary bg-primary-light1"}`}
          onClick={() => {
            onCategoryChange(null);
            clearFilter();
          }}
        >
          All
        </Badge>
        {categories.map((category) => (
          <Badge
            key={category}
            variant="outline"
            className={`cursor-pointer hover:border-primary hover:bg-primary-light1 ${activeCategory === category && "border-primary bg-primary-light1"}`}
            onClick={() => {
              onCategoryChange(category);
              applyFilter();
            }}
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
