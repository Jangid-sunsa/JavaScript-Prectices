/* Voting Eligibility List
    You're given a list of people with:
    Task:
        Print only the names of those eligible to vote (18+).
        Count and print how many are eligible and how many are not
 */

const people = [
  { name: "Ajay", age: 21 },
  { name: "Sara", age: 16 },
  { name: "Nikhil", age: 18 },
  { name: "Ritu", age: 15 },
];

let yes = 0;
let no = 0;

people.forEach((candidates) => {
  if (candidates.age >= 18) {
    console.log(candidates.name);
    yes++;
  } else {
    no++;
  }
});

console.log(`Total Eligible candidates is : ${yes}`);
console.log(`Total Not Eligible candidates is : ${no}`);


// // 3. 2010 ke baad publish hui books count karo
// const countAfter2010 = books.filter(book => book.year > 2010).length;
// console.log(`Number of books published after 2010: ${countAfter2010}`);