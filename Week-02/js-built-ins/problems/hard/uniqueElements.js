/*
  Write a function `getUniqueElements` which takes an array as input and returns a new array containing only the unique elements from the input array.

  What are unique elements?
  - Elements that appear only once in the array or the first occurrence of each element in case of duplicates.

  Example:
  - Input: [10, 20, 30, 10, 40, 20]
  - Output: [10, 20, 30, 40]

  - Input: [1, 2, 3, 4, 5]
  - Output: [1, 2, 3, 4, 5]

  - Input: []
  - Output: []

  Once you've implemented the logic, test your code by running
  - `npm run test-unique`
*/
console.log(getUniqueElements([10, 20, 30, 10, 40, 20]));

function getUniqueElements(arr) {
  let resultArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!resultArr.includes(arr[i])) {
      resultArr.push(arr[i]);
    }
  }
  return resultArr;
  // Your code here
}

module.exports = getUniqueElements;
