import books from "@/mocks/books";
import { Book } from "@/types/Books";

const orderBooksByIndexes = (...indexes: number[]): Book[] | Error => {
  const maxIndex = books.length - 1;

  if (indexes.some((index) => index > maxIndex)) {
    throw new Error("One or more indexes are out of bounds");
  }

  const uniqueIndexes = new Set(indexes);
  if (uniqueIndexes.size !== indexes.length) {
    throw new Error("Duplicate indexes are not allowed");
  }

  return indexes.map((index) => books[index]);
};

export default orderBooksByIndexes;
