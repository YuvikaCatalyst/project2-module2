let books = [
  { id: 1, 
    title: "c++",
     author: "yuvika",
      pages: 155,
       isRead: true
       },
  { id: 2,
     title: "c#",
      author: "uv",
       pages: 200,
        isRead: false
       },
  {
    id: 3,
    title: "web development",
    author: "yuvika_kumar",
    pages: 305,
    isRead: true,
  },
  { id: 4, title: "data science", author: "richa", pages: 105, isRead: true },
  {
    id: 5,
    title: "mySql",
    author: "aashish_kumar_garg",
    pages: 172,
    isRead: false,
  },
  { id: 6,
     title: "accounting",
      author: "muskan",
       pages: 109,
        isRead: false
       },
  {
    id: 7,
    title: "Artificial Intelligence",
    author: "makul_kumar",
    pages: 300,
    isRead: true,
  },
  {
    id: 8,
    title: "Physical Education",
    author: "madhav_kumar",
    pages: 155,
    isRead: true,
  },
  { id: 9,
     title: "java", 
     author: "gaganjot_kaur", 
     pages: 255, 
     isRead: false
     },
  {
    id: 10,
    title: "advanced java",
    author: "payal_sharma",
    pages: 100,
    isRead: true,
  },
];



function displayBooks() {
  books.map(function (card) {
    let full_name = card.author.split("_").map((name) => name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase()).join(" ");
    console.log( `The book is "${card.title}" and the author of this book is "${full_name}"`);
  });
}


function searchBooks(text) {
  let searchText = text.toLowerCase(); 
  let foundBooks = books.filter(function (book) {
    return book.title.toLowerCase().includes(searchText);
  });

  if (foundBooks.length === 0) {
    console.log("No book with this name is present");
  } else {
    console.log(foundBooks);
  }
}

function totalPages() {
  console.log(
    "Total number of pages : ",
    books.reduce(function (total, book) {
      return total + book.pages;
    }, 0)
  );
}

function pagesRead() {
  console.log(
    "Total number of pages read : ",
    books.reduce(function (total, book) {
      if (book.isRead) {
       total=total + book.pages;
      }
      return total;
    }, 0)
  );
}


function toggleReadingStatus(id) {
  const bookToUpdate = books.find(book => book.id === id); 
  
  if (bookToUpdate) {
    bookToUpdate.isRead = !bookToUpdate.isRead;
    console.log(`Book with ID ${id} is now marked as ${bookToUpdate.isRead ? 'read' : 'unread'}.`);
  } else {
    console.log(`Book with ID ${id} is not found.`);
  }
}

function sortBooks() {
  console.log(books.sort((a, b) => a.pages - b.pages));
}

function addBook(title, author, pages, isRead) {
  if (!title || !author || !pages || !isRead) {
    console.log("kindly enter title, author, pages and Reading status(title and authod must be of type string,pages of type number and reading ststus must be boolean).");
  }
else{
let newBook = { id: books.length + 1, title, author, pages, isRead };
books.push(newBook);
console.log(`book has been added to the library.`,books);
}
}

function removeBook(id) {
  const removedBook = books.find(book => book.id === id);
  if (removedBook) {
    books = books.filter(book => book.id !== id);
    console.log(`"${removedBook.title}" has been removed from the library.`,books);
  } else {
    console.log(`Book with ID ${id} is not found in the library.`);
  }
}





let functionName = prompt("Enter the name of the function you want to execute (displayBooks, searchBooks, totalPages, pagesRead, toggleReadingStatus, sortBooks, addBook, removeBook):");


switch (functionName) {
  case "displayBooks":
    displayBooks();
    break;
  case "searchBooks":
    let searchArg = prompt("Enter the book name to be found:");
    searchBooks(searchArg);
    break;
  case "totalPages":
    totalPages();
    break;
  case "pagesRead":
    pagesRead();
    break;
  case "toggleReadingStatus":
    const toggleArg = parseInt(prompt("Enter the ID of the book:"));
    toggleReadingStatus(toggleArg);
    break;
  case "sortBooks":
    sortBooks();
    break;
  case "addBook":
    const addArgs = prompt("Enter title, author, pages, and isRead (separated by commas):").split(",");
    addBook(addArgs[0], addArgs[1], parseInt(addArgs[2]), addArgs[3]);
    break;
  case "removeBook":
    const removeArg = parseInt(prompt("Enter the ID of the book to remove:"));
    removeBook(removeArg);
    break;
  default:
    console.log("Invalid function name.");
}