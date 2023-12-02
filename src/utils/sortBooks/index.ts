import books from "@/mocks/books";
import { Book } from "@/types/Books";
import { SortingOptions } from "./types";

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

    const direction = {
      default: CompareDirection[options.direction],
      inverted: CompareDirection[options.direction] * -1,
    };

    if (bookA[options.attribute] < bookB[options.attribute]) {
      return direction.default;
    }

    return direction.inverted;
  });
};

export default sortBooks;
