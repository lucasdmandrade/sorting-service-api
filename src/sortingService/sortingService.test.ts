import { SortingOptions, SortingService } from "./";
import books from "../mocks/books";
import orderBooksByIndexes from "../utils/mockArranger";

describe("SortingService", () => {
  beforeEach(() => {
    jest.resetModules();
  });

  it("should sort books by title in ascending order", () => {
    const expectedOrder = [0, 2, 3, 1];

    const sortingService = new SortingService();

    const options: SortingOptions = {
      attribute: "title",
      direction: "ascending",
    };

    const sortedBooks = sortingService.sortBooks(options);

    expect(sortedBooks).toEqual(orderBooksByIndexes(...expectedOrder));
  });

  it("should sort books by author in descending order", () => {
    const expectedOrder = [2, 1, 3, 0];

    const sortingService = new SortingService();

    const options: SortingOptions = {
      attribute: "author",
      direction: "descending",
    };

    const sortedBooks = sortingService.sortBooks(options);

    expect(sortedBooks).toEqual(orderBooksByIndexes(...expectedOrder));
  });

  it("should sort books by title in descending order", () => {
    const expectedOrder = [0, 2, 3, 1];

    const sortingService = new SortingService();

    const options: SortingOptions = {
      attribute: "title",
      direction: "ascending",
    };
    const sortedBooks = sortingService.sortBooks(options);

    expect(sortedBooks).toEqual(orderBooksByIndexes(...expectedOrder));
  });

  it("should sort books by edition in descending order", () => {
    const expectedOrder = [2, 1, 3, 0];

    const sortingService = new SortingService();

    const options: SortingOptions = {
      attribute: "edition",
      direction: "descending",
    };

    const sortedBooks = sortingService.sortBooks(options);

    expect(sortedBooks).toEqual(orderBooksByIndexes(...expectedOrder));
  });

  it("should sort books by author in ascending order", () => {
    const expectedOrder = [2, 0, 1, 3];

    const sortingService = new SortingService();

    const options: SortingOptions = {
      attribute: "author",
      direction: "ascending",
    };

    const sortedBooks = sortingService.sortBooks(options);

    expect(sortedBooks).toEqual(orderBooksByIndexes(...expectedOrder));
  });

  it("should throw an exception when sorting a null set", () => {
    const sortingService = new SortingService();
    const options: SortingOptions = {
      attribute: "title",
      direction: "ascending",
    };

    // Exception test
    expect(() => sortingService.sortBooks(null as any)).toThrow(
      "Sorting options must be provided."
    );
  });
});
