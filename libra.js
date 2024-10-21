//Creating Server
const express = require('express');
const app = express();

//Middleware
app.use(express.json());

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
  if (newBook === '') {
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

//Default API to get the available books
app.get('/books', (req, res) => {
  if (library.length === 0) {
    res.send('Sorry!, no book at the moment. Check back later');
    return;
  }
  res.send(library);
});

//Optimizing API to add books
app.post('/book', (req, res) => {
  const newBook = req.body;
  const book = addBook(newBook);
  res.status(200).send(book);
});

//Optimizing API to delete books
app.delete('/book/:id', (req, res) => {
  const id = req.params.id;
  const delBookAtIndex = delBook(id);
  res.status(200).send(delBookAtIndex);
});

//Optimizing API to update books
app.put('/book/:id', (req, res) => {
  const id = req.params.id;
  newAuthor = req.body.author;
  newTitle = req.body.title;
  const updatedBook = updateBook(id, newAuthor, newTitle);
  res.status(200).send(updatedBook);
});
const port = 2300;

app.listen(port, () => {
  console.log(`Your are running on port ${port}`);
});
