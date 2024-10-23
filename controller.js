// An aaray of books repping a library
const library = [
  {
    id: 1,
    title: 'Rich dad Poor dad',
    author: 'James',
  },
  {
    id: 2,
    title: 'Gifted Hands',
    author: 'Steve',
  },
  {
    id: 3,
    title: 'Atomic Habits',
    author: 'Bond',
  },
  {
    id: 4,
    title: 'Business Intelligence for Dummies',
    author: 'Michael',
  },
  {
    id: 5,
    title: "Don't give a fuck",
    author: 'John cena',
  },
];

// Function to add new book==========================>
function addBook(newBook) {
  if (newBook === 0) {
    res.send('Pls add new book');
    return;
  }
  library.push(newBook);
  return newBook;
}

// Function to delete book========================>
function delBook(id) {
  const index = library.findIndex((u) => u.id === parseInt(id));
  if (index === -1) {
    return 'Not found';
  }
  const delBook = library.splice(index, 1);
  return delBook;
}

// Function to update book=======================>
function updateBook(id, newAuthor, newTitle) {
  index = library.find((u) => u.id === parseInt(id));
  index.author = newAuthor;
  index.title = newTitle;
  return index;
}

module.exports = {library, updateBook, addBook, delBook}