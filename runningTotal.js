/* B-02  —  Running Total Generator         

 Medium 
Concepts Used:  Loops · Arrays 
Scenario:  ExpenseMate, a budgeting app, shows a running total next to each 
expense. Write a function runningTotal(amounts) that returns a new array where each 
element is the cumulative sum up to that point. 
● Return "Invalid"  
○ if input isn't an array  
○ any value isn't a number 
Expected Output: 
   runningTotal([100, 50, 25]) → [100, 150, 175] 
 
Hints: 
  1.  Keep a variable that tracks the running sum so far 
  2.  For each amount, add it to the running sum and push the new sum into a result array  */

// input: array of number
// output: sum of each other in a new array
// return: a number

function runningTotal(ammounts) {
  if (!Array.isArray(ammounts)) {
    return "Invalid";
  }
  let sum = 0;
  let arr = [];
  for (let number of ammounts) {
    if (typeof number !== "number") {
      return "Invalid";
    }
    sum += number;
    arr.push(sum);
  }
  return arr;
}
console.log(runningTotal([100, 50, 25]));
