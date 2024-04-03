// Testing Asynchronous Code

// callback async function

// function fetchData(callback) {
//   setTimeout(() => {
//     callback("peanut butter");
//   }, 6000);
// }

// test("the data is peanut butter", (done) => {
//   const callback = (data) => {
//     expect(data).toBe("peanut butter");
//     done();
//   };
//   fetchData(callback);
// }, 8000);

//----------------------------------------------

// promise async function

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("peanut butter");
    }, 6000);
  });
}

test("the data is peanut butter", () => {
  return fetchData().then((data) => {
    expect(data).toBe("peanut butter");
  });
}, 8000);

test("the data is peanut butter", async () => {
  const food = await fetchData();
  expect(food).toBe("peanut butter");
}, 8000);
