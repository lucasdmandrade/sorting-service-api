import sortBooks, { SortingOptions } from ".";
import orderBooksByIndexes from "../mockArranger";

describe("SortingService", () => {
  beforeEach(() => {
    jest.resetModules();
  });

  it("should sort books by title in ascending order", () => {
    const expectedOrder = [0, 2, 3, 1];

    const options: SortingOptions = {
      attribute: "title",
      direction: "ascending",
    };

    const sortedBooks = sortBooks(options);

    expect(sortedBooks).toEqual(orderBooksByIndexes(...expectedOrder));
  });

  it("should sort books by author in descending order", () => {
    const expectedOrder = [2, 1, 3, 0];

    const options: SortingOptions = {
      attribute: "author",
      direction: "descending",
    };

    const sortedBooks = sortBooks(options);

    expect(sortedBooks).toEqual(orderBooksByIndexes(...expectedOrder));
  });

  it("should sort books by title in descending order", () => {
    const expectedOrder = [0, 2, 3, 1];

    const options: SortingOptions = {
      attribute: "title",
      direction: "ascending",
    };
    const sortedBooks = sortBooks(options);

    expect(sortedBooks).toEqual(orderBooksByIndexes(...expectedOrder));
  });

  it("should sort books by edition in descending order", () => {
    const expectedOrder = [2, 1, 3, 0];

    const options: SortingOptions = {
      attribute: "edition",
      direction: "descending",
    };

    const sortedBooks = sortBooks(options);

    expect(sortedBooks).toEqual(orderBooksByIndexes(...expectedOrder));
  });

  it("should sort books by author in ascending order", () => {
    const expectedOrder = [2, 0, 1, 3];

    const options: SortingOptions = {
      attribute: "author",
      direction: "ascending",
    };

    const sortedBooks = sortBooks(options);

    expect(sortedBooks).toEqual(orderBooksByIndexes(...expectedOrder));
  });

  it("should throw an exception when sorting a null set", () => {
    expect(() => sortBooks({} as SortingOptions)).toThrow(
      "Sorting options must be provided."
    );
  });
});
