/* A-03  —  Weekly Steps Summary (done)         

 Medium 
Concepts Used:  Functions · Loops · Objects 
Scenario:  FitTrack, a fitness app, logs a user's daily step counts for the week in an 
array. Write a function weeklyStepsSummary(stepsArray) that returns an object { 
totalSteps, goalReached }, where goalReached is true once totalSteps reaches 
50000.  
● If stepsArray is not an array, return "Invalid".  
● If any value inside the array is not a number, return "Invalid". 
Expected Output: 
   weeklyStepsSummary([8000,7500,9200,6000,10000,5500,4000]) 
     → { totalSteps: 50200, goalReached: true } 
 
Hints: 
  1.  Loop through the array and add each day's steps to a running total 
  2.  Compare the total to 50000 to set goalReached, then return both in one object  */

// input: a array of number
// output: a object
// return : a object
function weeklyStepsSummary(stepsArray) {
  if (!Array.isArray(stepsArray)) {
    return "Invalid";
  }

  let total = 0;
  for (let steep of stepsArray) {
    if (typeof steep !== "number") {
      return "Invalid";
    }
    total += steep;
  }
  let goalReached = false;
  if (total > 50000) {
    goalReached = true;
  }

  let result = {
    total: total,
    goalReached: goalReached,
  };

  return result;
}
console.log(weeklyStepsSummary([8000, 7500, 9200, 6000, 10000, 5500, 4000]));
