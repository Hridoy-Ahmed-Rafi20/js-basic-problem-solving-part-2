/* A-08  —  Leap Year Checker         

 Easy 
Concepts Used:  Functions · Logical Operators 
Scenario:  Write a function isLeapYear(year) that returns true if the year is a leap 
year. Rule: divisible by 4 AND (not divisible by 100 OR divisible by 400)
      Rule: (Year % 4 == 0) AND (Year % 100 != 0 OR Year % 400 == 0). 
● Return "Invalid" if the input isn't a number. 
Expected Output: 
   isLeapYear(2024) → true 
   isLeapYear(1900) → false 
   isLeapYear(2000) → true 
 
Hints: 
  1.  Combine % checks with && and || 
  2.  Test all three given examples to confirm your logic */

// input: a full year
// output: result of a year true or false
// return: true or false

function isLeapYear(year) {
  if (typeof year !== "number") {
    return "Invalid";
  }
  if ((year % 4 === 0) & (year % 100 !== 0 || year % 400 === 0)) {
    return true;
  } else {
    return false;
  }
}
console.log(isLeapYear(2024));
console.log(isLeapYear(1900));
console.log(isLeapYear(2000));
