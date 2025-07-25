// Student Result Processing

const students = [
  { Name: "Praveen", Marks: 90 },
  { Name: "Amit", Marks: 85 },
  { Name: "Peps", Marks: 65 },
  { Name: "Avni", Marks: 30 },
  { Name: "Yuvraj", Marks: 20 },
];

// Q1. Calculates the average marks of all students.

let avgmarks = 0;
for (let i = 0; i < students.length; i++) {
  avgmarks += students[i].Marks;
}
let average = avgmarks / students.length;
console.log("Average Marks is: ", average);

//Q2. Lists the names of students who scored more than 75 (consider them as "distinction").

let moreThen = students
  .filter((students) => students.Marks > 75)
  .map((students) => students.Name);
console.log("The names of students who scored more than 75 is:", moreThen);

//Q3. Lists the names of students who failed (marks < 35).

let lessThen = students
  .filter((students) => students.Marks < 35)
  .map((students) => [students]);
console.log("The names of students who failed", lessThen);

/*Q4. Display a message for each student:
 * "Excellent" if marks >= 90
 * "Good" if marks between 75 and 89
 * "Pass" if marks between 35 and 74
 * "Fail" if marks < 35
 */
console.log("* Display message for each students:-");

for (let i = 0; i < students.length; i++) {
  let { Name, Marks } = students[i];  

  if (Marks >= 90) {
    console.log(`${Name} ${Marks} : Excellent`);
  } else if (75 <= Marks && Marks <= 89) {
    console.log(`${Name} ${Marks} : Good`);
  } else if (35 <= Marks && Marks <= 74) {
    console.log(`${Name} ${Marks} : Pass`);
  } else {
    console.log(`${Name} ${Marks} : Fail`);
  }
}
