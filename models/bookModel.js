const db = require("../config/db.config");

class Book {
  static getAll(callback) {
    const query = "SELECT * FROM books";
    db.query(query, callback);
  }

  static getById(id, callback) {
    const query = "SELECT * FROM books WHERE id = ?";
    db.query(query, [id], callback);
  }

  static create(newBook, callback) {
    const { title, author, publication_year } = newBook;
    const query =
      "INSERT INTO books (title, author, publication_year) VALUES (?, ?, ?)";
    db.query(query, [title, author, publication_year], callback);
  }

  static update(id, updatedBook, callback) {
    const { title, author, publication_year } = updatedBook;
    const query =
      "UPDATE books SET title = ?, author = ?, publication_year = ? WHERE id = ?";
    db.query(query, [title, author, publication_year, id], callback);
  }

  static delete(id, callback) {
    const query = "DELETE FROM books WHERE id = ?";
    db.query(query, [id], callback);
  }
}

module.exports = Book;
