/* A-09  —  Email Domain Analyzer (done)         
Medium 
Concepts Used:  String · Split · Loop · Object  
Scenario:  MailBox Pro, an email management system, wants to analyze a sentence 
containing email addresses. Write a function analyzeEmailDomains(text) that returns 
an object containing the total number of email addresses and the longest email 
domain (the part after @). 
● "Invalid" if the input is not a string. 
Expected Output: 
●    analyzeEmailDomains("Contact support@gmail.com admin@yahoo.com 
info@programminghero.com")  
→ { emailCount: 3, longestDomain: "programminghero.com" }  
● analyzeEmailDomains("Hello everyone!")  
→ { emailCount: 0, longestDomain: "" } 
Hints: 
1.  Use split(" ") to separate the sentence into words.  
2.  Check whether a word contains "@" using includes("@"), then split("@") to extract the */

// input : a string
// output : a object with total email count and longest domain
// return : a object

function analyzeEmailDomains(emailLisst) {
  if (typeof emailLisst !== "string") {
    return "Invalid";
  }
  let splitEmailList = emailLisst.split(" ");

  let symbol = "@";
  let countEmail = 0;
  let countLongestDomain = "";
  for (let email of splitEmailList) {
    if (email.includes(symbol)) {
      countEmail++;
      let splitEmail = email.split("@");
      for (let domain of splitEmail) {
        if (domain.length > countLongestDomain.length) {
          countLongestDomain = domain;
        }
      }
    }
  }
  let result = {
    EmailCount: countEmail,
    LongestDomain: countLongestDomain,
  };

  return result;
}
console.log(
  analyzeEmailDomains(
    "Contact support@gmail.com admin@yahoo.com info@programminghero.com",
  ),
);
console.log(analyzeEmailDomains("Hello everyone!"));
