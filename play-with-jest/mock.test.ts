export function forEach(items, callback) {
  for (const item of items) {
    callback(item);
  }
}

const mockCallback = jest.fn((x) => 42 + x);
test("forEach mock function", () => {
  forEach([12, 13], mockCallback);
  // The mock function was called twice
  expect(mockCallback.mock.calls).toHaveLength(2);
  expect(mockCallback.mock.calls[0][0]).toBe(12);
  expect(mockCallback.mock.calls[1][0]).toBe(13);
  expect(mockCallback.mock.results[0].value).toBe(54);
});
