import books from "../../mocks/books";
import { Book } from "../../sortingService";

const orderBooksByIndexes = (...indexes: number[]): Book[] | Error => {
  const maxIndex = books.length - 1;

  if (indexes.some((index) => index > maxIndex)) {
    return new Error("One or more indexes are out of bounds");
  }

  const uniqueIndexes = new Set(indexes);
  if (uniqueIndexes.size !== indexes.length) {
    return new Error("Duplicate indexes are not allowed");
  }

  console.log("books: ", books[0], books[1], books[2], books[3]);
  const orderedBooks = indexes.map((index) => books[index]);

  console.log("orderBooksByIndexes: ", orderedBooks);

  return orderedBooks;
};

export default orderBooksByIndexes;
