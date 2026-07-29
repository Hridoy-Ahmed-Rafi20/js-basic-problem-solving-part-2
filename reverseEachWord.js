/* B-03  —  Reverse Each Word in a Sentence         
    
Hard 
Concepts Used:  Strings · Arrays · Loops 
Scenario:  Write a function reverseEachWord(sentence) that reverses every individual 
word but keeps the word order the same. 
● If the input is not a string, return "Invalid". 
Expected Output: 
reverseEachWord('Hero is strong') → 'oreH si gnorts' 
Hints: 
1.  split(' ') into an array of words 
2.  Reverse each word individually, then join(' ') them back */

// input: a string
// output: reversing word of sentence
// return: a string

function reverseEachWord(sentence) {
  let arr = [];

  let splitSentence = sentence.split(" ");
  for (let word of splitSentence) {
    let splitWord = word.split("");
    let reveseWord = splitWord.reverse();
    let joinWord = reveseWord.join("");
    arr.push(joinWord);
  }

  let joinArr = arr.join(" ");
  return joinArr;
}
console.log(reverseEachWord("Hero is strong"));
