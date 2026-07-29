/* A-01  —  Largest & Smallest in an Array          
Concepts Used:  Arrays · Loops · Conditionals 
Scenario:  Given an array of numbers, find both the largest AND smallest value using 
a single loop (no built-in Math.max/Math.min). 
● If the input is not an array, return "Invalid". 
● If any element of the array is not a number, return "Invalid". 
Expected Output: 
Numbers: [45, 12, 89, 3, 67] 
Largest: 89 
Smallest: 3 
Hints: 
1.  Initialize both max and min to the first element 
2.  Update them inside one loop as you compare each number */

function largestAndSmallest(numbers) {
  if (!Array.isArray(numbers)) {
    return "Invalid";
  }

  let max = numbers[0];
  let min = numbers[0];

  for (let i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] !== "number") {
      return "Invalid";
    }

    if (numbers[i] > max) {
      max = numbers[i];
    } else {
      if (numbers[i] < min) {
        min = numbers[i];
      }
    }
  }
  return `Largest: ${max} 
Smallest: ${min}`;
}

let numbers = [45, 12, 89, 3, 67];
console.log(largestAndSmallest(numbers));
