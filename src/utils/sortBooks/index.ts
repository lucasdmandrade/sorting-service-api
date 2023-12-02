import books from "../../mocks/books";

export interface Book {
  title: string;
  author: string;
  edition: number;
}

export interface SortingOptions {
  attribute: keyof Book;
  direction: "ascending" | "descending";
}

const sortBooks = (options: SortingOptions): Book[] => {
  if (!Object.keys(options).length) {
    throw new Error("Sorting options must be provided.");
  }

  return [...books].sort((bookA, bookB) => {
    const compareResult = options.direction === "ascending" ? 1 : -1;
    if (bookA[options.attribute] < bookB[options.attribute]) {
      return -compareResult;
    }
    if (bookA[options.attribute] > bookB[options.attribute]) {
      return compareResult;
    }
    return 0;
  });
};

export default sortBooks;
