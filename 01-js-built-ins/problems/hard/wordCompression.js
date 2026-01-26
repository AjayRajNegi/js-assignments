/*
  Write a function `compressWords` which takes an array of strings as input and returns a new array with consecutive duplicate elements compressed. If an element appears consecutively, it is replaced by the element followed by the count of its occurrences.

  Example:
  - Input: ["apple", "apple", "banana", "banana", "banana", "cherry", "apple", "apple"]
  - Output: ["apple2", "banana3", "cherry", "apple2"]

  - Input: ["cat", "dog", "dog", "dog", "cat"]
  - Output: ["cat", "dog3", "cat"]

  - Input: ["one", "two", "three"]
  - Output: ["one", "two", "three"]

  - Input: []
  - Output: []

  Note:
  - The function should handle empty arrays and arrays with no consecutive duplicates.

  Once you've implemented the logic, test your code by running
  - `npm run test-compressWord`
*/

function compressWords(words) {
  if (!Array.isArray(words) || words.length === 0) {
    return [];
  }

  const result = [];
  let current = words[0];
  let count = 1;

  for (let i = 1; i < words.length; i++) {
    if (words[i] === current) {
      count++;
    } else {
      result.push(count > 1 ? current + count : current);
      current = words[i];
      count = 1;
    }
  }

  result.push(count > 1 ? current + count : current);

  return result;
}

module.exports = compressWords;
