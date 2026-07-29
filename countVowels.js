/* A-05  —  Count Vowels in a String (done)        

 Easy 
Concepts Used:  Strings · Loops · Conditionals 
Scenario:  Write a function countVowels(str) that counts how many vowels (a, e, i, o, 
u) appear in a string, case-insensitive. 
● If the input is not a string, return "Invalid". 
Expected Output: 
   countVowels('Hello World') → 3 
 
Hints: 
  1.  Lowercase the string first so case doesn't matter 
  2.  Loop through each character and check if it's in 'aeiou' using includes() */

// input: a string
// output: number of vowel appear
// return: a number

function countVowels(str) {
  let lowercase = str.toLowerCase();

  let count = 0;
  let vowels = ["a", "e", "i", "o", "u"];
  for (let word of str) {
    if (vowels.includes(word)) {
      count++;
    }
  }
  return count;
}
console.log(countVowels("Hello World"));
