// Exercise 2-3
// ------------

// This function expects an array of 2 numbers as input (e.g. [1, 2])
// Make this function return the sum of the two numbers that are passed to it.
// If anything other than an array with 2 numbers is passed, return undefined.
//
// HINT: You can use the typeof function to check the type of each element:
//   - `typeof 3` returns 'number')

function sumDigits(array) {
  if (array.length >= 3) return undefined;
  let sum = array[0] + array[1];
  return sum;
}

// Add 5 more test cases here! 7 total
expect(sumDigits([2, 5]), 7);
expect(sumDigits([-4, 5]), 1);
expect(sumDigits([-5, 3]), -2);
expect(sumDigits([-8, 6]), -2);
expect(sumDigits([-3, 7]), 4);
expect(sumDigits([0, 2]), 2);
expect(sumDigits([5, 9]), 14);
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
