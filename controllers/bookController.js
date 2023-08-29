const Book = require("../models/bookModel");

exports.getAllBooks = (req, res) => {
  Book.getAll((err, results) => {
    if (err) {
      console.error("Error fetching books:", err);
      res.status(500).json({ error: "Unable to fetch books" });
    } else {
      res.json(results);
    }
  });
};

exports.getBookById = (req, res) => {
  const bookId = req.params.id;
  Book.getById(bookId, (err, results) => {
    if (err) {
      console.error("Error fetching book by ID:", err);
      res.status(500).json({ error: "Unable to fetch the book" });
    } else if (results.length === 0) {
      res.status(404).json({ error: "Book not found" });
    } else {
      res.json(results[0]);
    }
  });
};

exports.createBook = (req, res) => {
  const newBook = req.body;
  Book.create(newBook, (err, result) => {
    if (err) {
      console.error("Error creating a book:", err);
      res.status(500).json({ error: "Unable to create a book" });
    } else {
      res.status(201).json({ message: "Book created successfully" });
    }
  });
};

exports.updateBook = (req, res) => {
  const bookId = req.params.id;
  const updatedBook = req.body;
  Book.update(bookId, updatedBook, (err, result) => {
    if (err) {
      console.error("Error updating a book:", err);
      res.status(500).json({ error: "Unable to update the book" });
    } else {
      res.json({ message: "Book updated successfully" });
    }
  });
};

exports.deleteBook = (req, res) => {
  const bookId = req.params.id;
  Book.delete(bookId, (err, result) => {
    if (err) {
      console.error("Error deleting a book:", err);
      res.status(500).json({ error: "Unable to delete the book" });
    } else {
      res.json({ message: "Book deleted successfully" });
    }
  });
};
