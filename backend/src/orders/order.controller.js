const Order = require('./order.model');

const createAnOrder = async (req, res) => {
  try {
    console.log(req.body);
    const newOrder = await Order(req.body);
    await newOrder.save();
    res.status(200).send({ message: 'Order created successfully', order: newOrder });
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: err.message });
  }
};

const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.status(200).send(orders);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: error.message });
  }
};

const getAnOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    res.status(200).send(order);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: error.message });
  }
};

const editAnOrder = async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });

    if (!updatedOrder) {
      throw new Error({ status: 404, message: 'Order not found' });
    }
    res.status(200).send({ message: 'Order updated successfully', updatedOrder });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: error.message });
  }
};

const deleteAnOrder = async (req, res) => {
  try {
    const deletedOrder = await Order.findByIdAndDelete(req.params.id);

    if (!deletedOrder) {
      throw new Error({ status: 404, message: 'Order not found' });
    }
    res.status(200).send({ message: 'Order deleted successfully', deletedOrder });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: error.message });
  }
};

module.exports = {
  createAnOrder,
  getAllOrders,
  getAnOrder,
  editAnOrder,
  deleteAnOrder,
} = require('./order.controller');
