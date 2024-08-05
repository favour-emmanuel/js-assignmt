// Create the library Array
const library = [];

// Adding books to Library
library.push(
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    yearPublished: 1925,
    available: true,
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    yearPublished: 1960,
    available: true,
  },
  {
    title: "1984",
    author: "George Orwell",
    yearPublished: 1949,
    available: false,
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    yearPublished: 1813,
    available: true,
  }
);
console.log(library);

// Update the Availability of a Book
const bookToUpdate = library.find((book) => book.title === "1984");
if (bookToUpdate) {
  bookToUpdate.available = true;
}
console.log(library);

//  Remove a Book from the Library
const indexToRemove = library.findIndex(
  (book) => book.title === "Pride and Prejudice"
);
if (indexToRemove !== -1) {
  library.splice(indexToRemove, 1);
}
console.log(library);

// Check if a Book is in the Library
const isBookInLibrary = library.some(
  (book) => book.title === "The Great Gatsby"
);
console.log(isBookInLibrary);

// Borrow the First Book
const firstAvailableBook = library.find((book) => book.available === true);
if (firstAvailableBook) {
  firstAvailableBook.available = false;
  const borrowedBook = library.shift();
  console.log(borrowedBook);
}
console.log(library);

// Add a New Book to the Start of the Library
library.unshift({
  title: "The Catcher in the Rye",
  author: "J.D. Salinger",
  yearPublished: 1951,
  available: true,
});
console.log(library);

//Get a List of All Book Titles
const bookTitles = library.map((book) => book.title).join(", ");
console.log(bookTitles);

// Create a New Library Section
const newArrivals = library.slice(-2);
console.log(newArrivals);
