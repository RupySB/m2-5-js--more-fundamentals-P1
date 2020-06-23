// Exercise 2-4
// ------------

// Write a function that returns the letter at the specified position in the
// string. If no such letter exists, it should return undefined.
//
// For example:
// getLetterAtIndex("hello", 1); // e
// getLetterAtIndex("", 4);      // undefined
// getLetterAtIndex("abc", 0);   // a

function getLetterAtIndex(str, index) {
  // Your code here
}
let anyString = "Test sentence";
console.log("'" + anyString.charAt() + "'");

// Add 6 more test cases
expect(getLetterAtIndex("hello", 4), "o");
expect(getLetterAtIndex("goodbye", 0), "g");

expect(getLetterAtIndex("pen", 2), "n");
expect(getLetterAtIndex("pencil", 4), "i");
expect(getLetterAtIndex("marker", 3), "k");
expect(getLetterAtIndex("phone", 6), "undefined");
expect(getLetterAtIndex("game", 2), "m");
expect(getLetterAtIndex("chocolate", 3), "c");
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
