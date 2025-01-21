const express = require('express');

const { postABook, getAllBooks, getABook, editABook, deleteABook } = require('./book.controller');
const router = express.Router();

// post a book
router.post('/create-book', postABook);

// get all books
router.get('/', getAllBooks);

// get a book
router.get('/:id', getABook);

// update a book
router.put('/edit/:id', editABook);

// delete a book
router.delete('/:id', deleteABook);

module.exports = router;
