const Book = require('./Book.model');

const postABook = async (req, res) => {
  try {
    console.log(req.body);
    const newBook = await Book({ ...req.body });
    await newBook.save();
    res.status(200).send({ message: 'Book created successfully', book: newBook });
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: err.message });
  }
};

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find().sort({ createdAt: -1 });
    res.status(200).send({ message: 'Books fetched successfully', books });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: error.message });
  }
};

const getABook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    res.status(200).send({ message: 'Book fetched successfully', book });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: error.message });
  }
};

const editABook = async (req, res) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });

    if (!updatedBook) {
      throw new Error({ status: 404, message: 'Book not found' });
    }
    res.status(200).send({ message: 'Book updated successfully', updatedBook });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: error.message });
  }
};

const deleteABook = async (req, res) => {
  try {
    const deletedBook = await Book.findByIdAndDelete(req.params.id);

    if (!deletedBook) {
      throw new Error({ status: 404, message: 'Book not found' });
    }
    res.status(200).send({ message: 'Book deleted successfully', deletedBook });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: error.message });
  }
};

module.exports = { postABook, getAllBooks, getABook, editABook, deleteABook };
