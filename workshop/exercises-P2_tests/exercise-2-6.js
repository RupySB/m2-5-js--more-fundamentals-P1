// Exercise 2-6
// ------------

// Step 1
// Write a function that
// - accepts an array.
// - The array has 3 elements.
// - The first element of the array is a string that represents an operation.
// - If the operation is
//      - "add", return the sum of the two other elements of the array.
//      - "sub" return their difference.
//      - "mult" return their product.
//  - Anything else return undefined.

// For example:
// f(["add", 10, 20]); // 30
// f(["mult", 2, 3]); // 6
// f(["spoof", 10, 10]); // undefined

function calculator(array) {
  let calculations = array[0];
  switch (calculations) {
    case "add":
      let sum = array[0] + array[1];
      return sum;
    case "sub":
      let sub = array[0] - array[1];
      return sub;
    case "mult":
      let mult = array[0] * array[1];
      return mult;
    default:
      array.filter(String) = undefined;
  }
}

// Step 2
// We need 8 total test cases. The first two is provided.
expect(calculator(["mult", 2, 4]), 8);
expect(calculator(["add", 2, 4]), 6);
expect(calculator(["sub", 7, 1]), 8);
expect(calculator(["add", 2, 2]), 4);
expect(calculator(["mult", 5, 1]), 5);
expect(calculator(["sub", 7, 4]), 3);
expect(calculator(["add", 4, 4]), 8);
expect(calculator(["mult", 6, 2]), 12);

/**
 * -------------------------------------------------------------------
 * ⚠️ No changes necessary below. ⚠️
 * -------------------------------------------------------------------
 */
function expect(result, value) {
  if (result === value) {
    console.log("✅ Test succeeded");
  } else {
    console.log(`⛔️ Expected “${result}” to equal “${value}”`);
  }
}
