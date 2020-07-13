// Exercise 2-7
// ------------

// Step 1
// - The function input is an array.
// - The first element of the array is a string. The second is a number.
// - Make this function return the string repeated as many times as specified by the second element of the array.
// - If a negative number or zero is specified, return an empty string. If any invalid parameters are supplied return undefined.

// f(["foo", 3]) // "foofoofoo"
// f(["fo", 3]) // "fofofo"
// f(["foo", -1]) // ""

function newWord(arr) {
  //I forgot to read line 5 that says its an array smh.
  const string = arr[0];
  const number = arr[1];
  if (typeof string !== "string" || typeof number !== "number")
    return undefined;
  if (number <= 0) return "";
  let answer = "";
  for (let i = 0; i < number; i++) {
    answer = answer + string;
  }
  return answer;
}

expect(newWord(["vet", 3]), "vetvetvet");
expect(newWord(["hey", 2]), "heyhey");
expect(newWord(["bye", 1]), "bye");
expect(newWord(["cat", 3]), "catcatcat");
expect(newWord(["puppy", 4]), "puppypuppypuppypuppy");
expect(newWord(["cool", 5]), "coolcoolcoolcoolcool");
expect(newWord(["fluffy", 4]), "fluffyfluffyfluffyfluffy");

// We need 7 test cases.
// Don't forget to test all of the question parameters

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
