const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const mongoose = require('mongoose');

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: ['http://localhost:5173'],
    credentials: true,
  })
);

const bookRoutes = require('./src/books/book.route');
app.use('/api/books', bookRoutes);

mongoose.connect('mongodb://127.0.0.1:27017/bookstore');
mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});
mongoose.connection.on('error', err => {
  console.error(err);
});

app.use('/', (req, res) => {
  res.send('Bookstore server is running');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
