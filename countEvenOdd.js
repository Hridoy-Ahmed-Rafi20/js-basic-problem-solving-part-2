/* B-05  —  Count Even & Odd in an Array         

Medium 
Concepts Used:  Arrays · Objects · Functions · Loops 
Scenario:  Write a function countEvenOdd(arr) that returns an object like { even: 3, 
odd: 2 } counting how many even and odd numbers are in the array. 
● If the input isn't an array, return "Invalid". 
● If the array contains any non-number values, return "Invalid". 
Expected Output: 
countEvenOdd([1,2,3,4,5]) → { even: 2, odd: 3 } 
Hints: 
1.  Start with an object { even: 0, odd: 0 } 
2.  Inside the loop, increment result.even or result.odd based on % 2 */

// input: a rray of number
// output: odd and even numbers number
// return: number

function countEvenOdd(arr) {
  let odd = 0;
  let even = 0;

  for (let number of arr) {
    if (number % 2 === 0) {
      even++;
    } else {
      odd++;
    }
  }
  let result = {
    even: even,
    odd: odd,
  };

  return result;
}
console.log(countEvenOdd([1, 2, 3, 4, 5]));
