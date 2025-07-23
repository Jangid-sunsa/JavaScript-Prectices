/* Employee Bonus Calculation
Task:
    1. Add a 10% bonus if experience is more than 5 years.
    2. Add a 5% bonus if experience is 3–5 years.
    3. No bonus for less than 3 years.
    4. Print name and final salary (salary + bonus) for each.
*/

const employees = [
  { name: "Amit", salary: 50000, experience: 6 },
  { name: "Nina", salary: 45000, experience: 4 },
  { name: "Karan", salary: 40000, experience: 2 },
];

let bonus = 0;

for (let i = 0; i < employees.length; i++) {
  let employee = employees[i];

  if (employee.experience > 5) {
    bonus = employee.salary * 0.1;
  } else if (employee.experience >= 3 && employee.experience <= 5) {
    bonus = employee.salary * 0.05;
  } else {
    bonus = 0;
  }

  let finalSalary = employee.salary + bonus; 
  console.log(`${employee.name} : ${finalSalary}`); 
}
