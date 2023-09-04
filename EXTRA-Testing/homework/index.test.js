const { checkSeatStatus, getRowNumber, book } = require("../homework");

describe("checkSeatStatus test", function () {
  it("checkSeatStatus should be a function", function () {
    expect(typeof checkSeatStatus).toBe("function");
  });

  it("checkSeatStatus function should have a string first parameter", function () {
    expect(function () {
      return checkSeatStatus(9);
    }).toThrow(new TypeError("First parameter is not a string"));
  });

  it("checkSeatStatus function should have a number second parameter", function () {
    expect(function () {
      return checkSeatStatus("hola", "9");
    }).toThrow(new TypeError("Second parameter is not a number"));
  });

  it("should return true if the seat defined by row and column is booked", function () {
    expect(checkSeatStatus("A", 1)).toBe(true);
  });

  it("should return false if the seat defined by row and column is not booked", function () {
    expect(checkSeatStatus("E", 3)).toBe(false);
  });
});

describe("getRowNumber test", function () {
  it("getRowNumber should return 0 if letter is A", function () {
    expect(getRowNumber("A")).toBe(0);
  });

  it("getRowNumber should return 2 if letter is C", function () {
    expect(getRowNumber("C")).toBe(2);
  });
});

describe("book test", function () {
  it("should return seat successfully booked", function () {
    expect(book("A", 3)).toBe("Seat in A3 successfully booked");
  });

  it("should return seat already booked", function () {
    expect(book("A", 1)).toBe("Seat in A1 already booked");
  });
});
