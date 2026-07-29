/* A-06  —  Remove Duplicate Values         

Medium 
Concepts Used:  Arrays · Loops · includes() 
Scenario:  Write a function removeDuplicates(arr) that returns a new array with only 
unique values, preserving order. 
● If the input is not an array, return "Invalid". 
Expected Output: 
removeDuplicates([1,2,2,3,4,4,5]) → [1, 2, 3, 4, 5] 
Hints: 
1.  Create an empty result array 
2.  For each item, only push it if the result array doesn't already includes() it */

// input: a array of numbers
// output: a new without duplicates
//  return: a array

function removeDuplicates(arr) {
  let uniqueValue = [];

  for (let value of arr) {
    if (uniqueValue.includes(value)) {
      continue;
    } else {
      uniqueValue.push(value);
    }
  }
  return uniqueValue;
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // → [1, 2, 3, 4, 5] )
