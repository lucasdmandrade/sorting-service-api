import { Book } from "@/types/Books";
import { SortingOptions } from "./types";
import books from "@/mocks/books";

const sortBooks = (options: SortingOptions): Book[] => {
  if (!Object.keys(options).length) {
    throw new Error("Sorting options must be provided.");
  }

  return [...books].sort((bookA, bookB) => {
    if (bookA[options.attribute] === bookB[options.attribute]) return 0;

    enum CompareDirection {
      "ascending" = -1,
      "descending" = 1,
    }

    const firstBookSmaller =
      bookA[options.attribute] < bookB[options.attribute] ? 1 : -1;

    return firstBookSmaller * CompareDirection[options.direction];
  });
};

export default sortBooks;
