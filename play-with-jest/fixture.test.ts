beforeAll(() => {
  console.log("beforeAll");
});

afterAll(() => {
  console.log("afterAll");
});

beforeEach(() => {
  console.log("beforeEach");
});

afterEach(() => {
  console.log("afterEach");
});

describe("test", () => {
  beforeAll(() => {
    console.log("beforeAll");
  });

  afterAll(() => {
    console.log("afterAll");
  });

  beforeEach(() => {
    console.log("beforeEach");
  });

  afterEach(() => {
    console.log("afterEach");
  });

  test("test1", () => {
    console.log("test-1");
  });

  test("test2", () => {
    console.log("test-1");
  });
});
