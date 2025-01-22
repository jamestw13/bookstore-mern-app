const express = require('express');

const { createAnOrder, getAllOrders, getAnOrder, editAnOrder, deleteAnOrder } = require('./order.controller');
const router = express.Router();

// post a order
router.post('/create-order', createAnOrder);

// get all orders
router.get('/', getAllOrders);

// get a order
router.get('/:id', getAnOrder);

// update a order
router.put('/edit/:id', editAnOrder);

// delete a order
router.delete('/:id', deleteAnOrder);

module.exports = router;
