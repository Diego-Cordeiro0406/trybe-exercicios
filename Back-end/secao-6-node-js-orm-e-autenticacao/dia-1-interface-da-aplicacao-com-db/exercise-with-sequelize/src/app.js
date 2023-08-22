const express = require('express');

const app = express();

const {
    getAll,
    getById,
    create,
    update,
    deleteBook,
} = require('./controllers/book.controller');

app.use(express.json());

app.get('/books', getAll);

app.get('/books/:id', getById);

app.post('/books', create);

app.put('/books/:id', update);

app.delete('/books/:id', deleteBook);

module.exports = app;