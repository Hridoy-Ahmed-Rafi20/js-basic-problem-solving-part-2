/* A-02  —  Word Position Filter         

Medium 
Concepts Used:  Strings · Loops · Modulus 
Scenario:  SnapText, a note-taking app, builds a quick preview of a caption by 
keeping only the words at even index positions (0, 2, 4...). Write a function 
filterEvenPositionWords(sentence) that returns the filtered sentence. 
Expected Output: 
filterEvenPositionWords('The quick brown fox jumps') 
→ 'The brown jumps' 
Hints: 
  1.  split(' ') into an array of words 
  2.  Loop through the words and keep the ones where the index passes i % 2 === 0 */

//input: a string
//output : words at the index of even number
// return : a string

function filterEvenPositionWords(sentence) {
  let evenIndexWord = [];

  let splitSentence = sentence.split(" ");
  for (let i = 0; i < splitSentence.length; i++) {
    if (i % 2 === 0) {
      evenIndexWord.push(splitSentence[i]);
    }
  }
  let joinedEvenWord = evenIndexWord.join(" ");
  return joinedEvenWord;
}
console.log(filterEvenPositionWords("The quick brown fox jumps"));
