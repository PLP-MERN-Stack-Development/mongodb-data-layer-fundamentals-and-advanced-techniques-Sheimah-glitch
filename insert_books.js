use plp_bookstore

db.books.insertMany([
  {
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    genre: "Fantasy",
    published_year: 1997,
    price: 1500,
    in_stock: true,
    pages: 309,
    publisher: "Bloomsbury"
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    published_year: 1937,
    price: 1800,
    in_stock: true,
    pages: 310,
    publisher: "Allen & Unwin"
  },
  {
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian",
    published_year: 1949,
    price: 1200,
    in_stock: false,
    pages: 328,
    publisher: "Secker & Warburg"
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    genre: "Self-Help",
    published_year: 2018,
    price: 2200,
    in_stock: true,
    pages: 320,
    publisher: "Penguin"
  },
  {
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    genre: "Finance",
    published_year: 1997,
    price: 1700,
    in_stock: true,
    pages: 336,
    publisher: "Warner Books"
  },
  {
    title: "The Da Vinci Code",
    author: "Dan Brown",
    genre: "Thriller",
    published_year: 2003,
    price: 2000,
    in_stock: true,
    pages: 454,
    publisher: "Doubleday"
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    genre: "Adventure",
    published_year: 1988,
    price: 1300,
    in_stock: true,
    pages: 208,
    publisher: "HarperCollins"
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Classic",
    published_year: 1925,
    price: 1600,
    in_stock: false,
    pages: 180,
    publisher: "Charles Scribner's Sons"
  },
  {
    title: "Sapiens",
    author: "Yuval Noah Harari",
    genre: "History",
    published_year: 2011,
    price: 2500,
    in_stock: true,
    pages: 443,
    publisher: "Harper"
  },
  {
    title: "The Subtle Art of Not Giving a F*ck",
    author: "Mark Manson",
    genre: "Self-Help",
    published_year: 2016,
    price: 2100,
    in_stock: true,
    pages: 224,
    publisher: "Harper"
  }
])

