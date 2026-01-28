/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  const newString = str
    .toLowerCase()
    .replaceAll(" ", "")
    .replace(/[^a-zA-Z0-9\s]/g, "");
  let len = newString.length;
  let palindrome = "";

  while (len > 0) {
    let lastChar = newString[len - 1];
    palindrome = palindrome + lastChar;
    len--;
  }

  return palindrome === newString ? true : false;
}

module.exports = isPalindrome;
