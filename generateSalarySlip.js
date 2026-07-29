/* B-06  —  Employee Salary Slip         

Medium 
Concepts Used:  Objects · Functions · Arithmetic 
Scenario:  Given a single employee object (name, basicSalary, bonus, tax), write a 
function generateSalarySlip(employee) that returns a NEW object containing the 
employee's name and their netSalary (basicSalary + bonus - tax). 
● Return "Invalid" if: 
○ basicSalary is not a number 
○ bonus is not a number 
○ tax is not a number 
Expected Output: 
   employee = { name:'Karim', basicSalary:30000, bonus:5000, tax:2000 } 
   Slip: { name:'Karim', netSalary:33000 } 
 
Hints: 
  1.  netSalary = basicSalary + bonus - tax 
  2.  Return a new object — { name: employee.name, netSalary: ... }  */

//   input: a object
//  output: a new object with eompoyee name and net salary
//  return: a object

function generateSalarySlip(employee) {
  if (
    typeof employee.basicSalary !== "number" ||
    typeof employee.bonus !== "number" ||
    typeof employee.tax !== "number"
  ) {
    return "Invalid";
  }
  let basicSalary = employee.basicSalary;
  let bonus = employee.bonus;
  let tax = employee.tax;

  let calculateNetSalary = basicSalary + bonus - tax;

  result = {
    name: employee.name,
    netSalary: calculateNetSalary,
  };

  return result;
}
console.log(
  generateSalarySlip(
    (employee = {
      name: "Karim",
      basicSalary: 30000,
      bonus: 5000,
      tax: 2000,
    }),
  ),
);
