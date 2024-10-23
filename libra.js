//Creating Server
const express = require('express');
const app = express();
const controller = require('./controller.js');

//Middleware
app.use(express.json());

//Default API to get the available books
app.get('/books', (req, res) => {
  const library = controller.library;
  if (library.length === 0) {
    res.send('Sorry!, no book at the moment. Check back later');
    return;
  }
  res.send(library);
});

//Optimizing API to add books
app.post('/book', (req, res) => {
  const newBook = req.body;
  const book = controller.addBook(newBook);
  res.status(200).send(book);
});

//Optimizing API to delete books
app.delete('/book/:id', (req, res) => {
  const id = req.params.id;
  const delBookAtIndex = controller.delBook(id);
  res.status(200).send(delBookAtIndex);
});

//Optimizing API to update books
app.put('/book/:id', (req, res) => {
  const id = req.params.id;
  newAuthor = req.body.author;
  newTitle = req.body.title;
  const updatedBook = controller.updateBook(id, newAuthor, newTitle);
  res.status(200).send(updatedBook);
});
const port = 2300;

app.listen(port, () => {
  console.log(`Your are running on port ${port}`);
});
