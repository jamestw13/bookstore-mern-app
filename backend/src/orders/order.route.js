const express = require('express');

const { createAnOrder, getAllOrders, getAnOrder, editAnOrder, deleteAnOrder } = require('./order.controller');

const router = express.Router();

// post a book
router.post('/create-book', createAnOrder);

// get all books
router.get('/', getAllOrders);

// get a book
router.get('/:id', getAnOrder);

// update a book
router.put('/edit/:id', editAnOrder);

// delete a book
router.delete('/:id', deleteAnOrder);

module.exports = router;
