/* A-04  —  Palindrome Checker         

 Medium 
Concepts Used:  Strings · Reversal 
Scenario:  Write a function isPalindrome(str) that returns true if the string reads the 
same forwards and backwards (e.g. 'madam'). 
● If the input is not a string, return "Invalid". 
Expected Output: 
   isPalindrome('madam') → true 
   isPalindrome('hero')  → false 
 
Hints: 
  1.  Reverse the string using any method from Session 2 
  2.  Compare the reversed version to the original with === */

//input: a string
//output: true or false
// return : true or false
function isPalindrome(str) {
  let splitStr = str.split("");
  let reveseStr = splitStr.reverse();
  let joinStr = reveseStr.join("");

  if (joinStr === str) {
    return true;
  } else {
    return false;
  }
}
console.log(isPalindrome("madam"));
console.log(isPalindrome("hero"));
