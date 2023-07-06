const InputValidationException = require("../exceptions/InputValidationException");
const Book = require("../models/Book");

const addBook = async (book) => {
  try {
    book = new Book(book);
    await book.save();
    console.log(`New Book with ISBN: ${book.isbnNumber} was added.`);
    return book;
  } catch (err) {
    throw new InputValidationException(
      `Please use valid inputs. ${err.message}`
    );
  }
};

module.exports = { addBook };
