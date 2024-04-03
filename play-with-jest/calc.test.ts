import * as calc from "./calc";

// add

// Arrange
test("1 + 1 = 2", () => {
  // Act
  const actual = calc.add(1, 1);
  const expected = 2;
  // Assert
  expect(actual).toBe(expected);
});

// subtract

// Arrange
test("1 - 1 = 0", () => {
  // Act
  const actual = calc.subtract(1, 1);
  const expected = 0;
  // Assert
  expect(actual).toBe(expected);
});

// multiply

// Arrange
test("2 * 2 = 4", () => {
  // Act
  const actual = calc.multiply(2, 2);
  const expected = 4;
  // Assert
  expect(actual).toBe(expected);
});

// divide

// Arrange
test("4 / 2 = 2", () => {
  // Act
  const actual = calc.divide(4, 2);
  const expected = 2;
  // Assert
  expect(actual).toBe(expected);
});

// Arrange
test("4 / 0 = Error", () => {
  // Act
  // Assert
  expect(() => calc.divide(4, 0)).toThrowError("Cannot divide by zero");
});
