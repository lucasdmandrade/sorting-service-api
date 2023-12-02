import { Book } from "@/types/Books";

export interface SortingOptions {
  attribute: keyof Book;
  direction: "ascending" | "descending";
}
