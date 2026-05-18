/*
  Write a function `reve` which takes a string as input and returns the reversed version of the string.

  What is reversing a string?
  - Reversing a string means rearranging its characters in the opposite order.

  Example:
  - Input: "Sumana"
  - Output: "anamuS"

  - Input: "hello"
  - Output: "olleh"

  - Input: ""
  - Output: ""

  Once you've implemented the logic, test your code by running
  - `npm run test-reverseString`
*/
console.log("heyu");
console.log(reverseString("Sumana"));
function reverseString(str) {
  let reversed = "";

  for (let i = str.length - 1, j = 0; i >= 0; i--, j++) {
    reversed.push(str[i]);
    console.log(i, j, str[i], reversed[j]);
  }
  return reversed;
}

module.exports = reverseString;
