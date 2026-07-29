/* A-07  —  Student Report Card Generator         
Medium 
Concepts Used:  Objects · Functions · Conditionals 
Scenario:  Given a single student object with name and three subject marks (bangla, 
english, math), write a function generateReportCard(student) that returns a NEW 
object containing the student's name, total, average, and grade (A+ for 90+, A for 80+, 
B for 70+, F below 70). 
● Return "Invalid" if: 
○ student is not an object 

 
Expected Output: 
   student = { name:'Ayan', bangla:78, english:85, math:92 } 
   Report: { name:'Ayan', total:255, average:85, grade:'A' } 
 
Hints: 
  1.  Access marks with student.bangla, student.english, student.math 
  2.  Build and return a brand-new object — don't modify the original student object */

//input: a object
//output: a new object with total,average and grade
// return: a object

function generateReportCard(student) {
  if (typeof student !== "object" || Array.isArray(student)) {
    return "Invalid";
  }

  let total = 0;
  let countLengthOfValue = 0;
  let grade = "";

  for (let key in student) {
    if (typeof student[key] === "number") {
      let value = student[key];
      total += value;
      countLengthOfValue++;
    }
  }

  let avg = total / countLengthOfValue;

  if (avg >= 90) {
    grade = "A+";
  } else if (avg >= 80) {
    grade = "A";
  } else if (avg >= 70) {
    grade = "B";
  } else {
    grade = "F";
  }

  result = {
    Name: student.name,
    Total: total,
    Average: avg,
    Grade: grade,
  };

  return result;
}

console.log(
  generateReportCard(
    (student = {
      name: "Ayan",
      bangla: 78,
      english: 85,
      math: 92,
    }),
  ),
);
