/* Task 13-4B: Remove First and Last Character 
Problem Statement: 
Write a function removeFirstAndLast that takes a string and returns it with 
the first and last character removed. 
Input Output 
"hello" "ell" */

// Input: a string
// Output: the string without its first and last character
// Returns: a string

function removeFirstAndLast(str) {
  let newStr = [];

  let splitStr = str.split("");
  for (let i = 0; i < splitStr.length; i++) {
    if (i === 0 || i === splitStr.length - 1) {
      continue;
    } else {
      newStr.push(splitStr[i]);
    }
  }
  let intoStr = newStr.join("");
  return intoStr;
}

console.log(removeFirstAndLast("hello")); // Expected: "ell"
