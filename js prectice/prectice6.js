/*Filter Books by Author
    You're given an array of books with:
    title (string)
    author (string)
    year (number)
    Task:
    Print titles of all books by a specific author (e.g., "J.K. Rowling").
    Count how many books were published after the year 2010.
*/

const books = [
  { title: "Harry Potter", author: "J.K. Rowling", year: 2001 },
  { title: "The Silent Patient", author: "Alex Michaelides", year: 2019 },
  { title: "Fantastic Beasts", author: "J.K. Rowling", year: 2016 },
];

/*Using forEach :-
let author = "J.K. Rowling"; // Set a specific author
let book = books.filter((book) => book.author === author); // Fix: use book.author
console.log(`Books of ${author}:`);
book.forEach((book) => {
  // Use 'book' (filtered array) instead of 'books'
  console.log(book.title);
});

const publishedAfter2010 = books.filter((book) => book.year > 2010).length; // Fix: use book.year
console.log(`After 2010 published books is: ${publishedAfter2010}`);
*/

let author = 'J.K. Rowling';
console.log('Books of ' + author + ":");
for(let i = 0; i < books.length; i++){
  if(books[i].author === author){
    console.log(books[i].title);
  }
}

let count = 0;
for(let i = 0; i < books.length; i++){
  if(books[i].year > 2010 ){
    count = count + 1;  
  }
}
console.log('After 2010 published books is :' + count);
