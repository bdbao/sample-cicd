const express = require('express');
const app = express();
app.use(express.json());

let books = [
    { id: 1, title: "Book 1", author: "Author 1" },
    { id: 2, title: "Book 2", author: "Author 2" },
];

// Get all books
app.get('/books', (req, res) => {
    res.json(books);
});

// Add a new book
app.post('/books', (req, res) => {
    const newBook = { id: books.length + 1, ...req.body };
    books.push(newBook);
    res.status(201).json(newBook);
});

// Update a book
app.put('/books/:id', (req, res) => {
    const book = books.find(b => b.id === parseInt(req.params.id));
    if (!book) return res.status(404).send('Book not found.');

    book.title = req.body.title;
    book.author = req.body.author;
    res.json(book);
});

// Delete a book
app.delete('/books/:id', (req, res) => {
    books = books.filter(b => b.id !== parseInt(req.params.id));
    res.status(204).send();
});

app.listen(3000, () => console.log("Server running on port 3000"));
