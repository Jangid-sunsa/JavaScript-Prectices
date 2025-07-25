/*You're given an array of students with:
Task:
Assign grades:
A: 90+
B: 75–89
C: 50–74
D: 35–49
F: below 35
Print name and grade.*/

const students = [
  { name: "Arjun", marks: 95 },
  { name: "Meena", marks: 78 },
  { name: "Riya", marks: 30 },
  { name: "Sahil", marks: 52 },
];

students.forEach((student, index) => {
  let grade;

  if (student.marks >= 90) {
    grade = "A";
  } else if (75 <= student.marks && student.marks <= 89) {
    grade = "B";
  } else if (50 <= student.marks && student.marks <= 74) {
    grade = "C";
  } else if (35 <= student.marks && student.marks <= 49) {
    grade = "D";
  } else {
    grade = "F";
  }
  console.log(
    `${index + 1}. ${student.name} marks is: ${student.marks} \n   Grade is: ${grade}`
  );
});

// for (let i = 0; i < students.length; i++) {
//   let studentGrade = students[i];
//   let grade; 

//   if (studentGrade.marks >= 90) {
//     grade = "A";
//   } else if (75 <= studentGrade.marks && studentGrade.marks <= 89) {
//     grade = "B";
//   } else if (50 <= studentGrade.marks && studentGrade.marks <= 74) {
//     grade = "C";
//   } else if (35 <= studentGrade.marks && studentGrade.marks <= 49) {
//     grade = "D";
//   } else {
//     grade = "F";
//   }
//   console.log(`Grade is: ${grade}`);
//   console.log(`${studentGrade.name} ${grade}`);
// }
