/* B-04  —  Second Largest Number         

Medium 
Concepts Used:  Arrays · Loops · Conditionals 
Scenario:  Write a function secondLargest(arr) that finds the second largest number in 
an array WITHOUT using sort(). 
● If the input is not an array, return "Invalid". 
● If any element is not a number, return "Invalid". 
Expected Output: 
secondLargest([45, 12, 89, 3, 67]) → 67 
Hints: 
1.  Track both the largest AND second largest as you loop 
2.  When you find a new largest, the old largest becomes the new second largest */

// input: a array of numbers
// output: the second largest number formt eh array
// return: a number

function secondLargest(arr) {
  if (!Array.isArray(arr)) {
    return "Invalid";
  }
  let largest = 0;
  let secondLargest = 0;
  for (let number of arr) {
    if (typeof number !== "number") {
      return "Invalid";
    }
    if (number > largest) {
      largest = number;
      secondLargest = largest;
    } else {
      number > secondLargest && number !== largest;
      secondLargest = number;
    }
  }
  return secondLargest;
}
console.log(secondLargest([45, 12, 89, 3, 67]));
