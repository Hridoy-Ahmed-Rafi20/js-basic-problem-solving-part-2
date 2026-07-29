/* B-01  —  Sum of Digits         

Easy 
Concepts Used:  Loops · Modulus 
Scenario:  Write a function sumDigits(num) that adds up all the individual digits of a 
number. 
● If the input is not a number, return "Invalid". 
Expected Output: 
   sumDigits(1234) → 10   (1+2+3+4) 
 
Hints: 
  1.  Use % 10 to get the last digit, then Math.floor(num / 10) to remove it 
  2.  Repeat in a while loop until num becomes 0  */

// input: a digit of number
// output: sum of all digits
//  return : a number

function sumDigits(num) {
  let sum = 0;

  let intoStr = num.toString();
  let splitNum = intoStr.split("");
  for (let num of splitNum) {
    let intoNum = Number(num);
    sum += intoNum;
  }
  return sum;
}
console.log(sumDigits(1234));
