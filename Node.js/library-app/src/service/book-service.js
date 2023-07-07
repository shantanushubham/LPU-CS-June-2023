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

const getBookByIsbn = async (isbnNumber) => {
  const book = await Book.findOne({ isbnNumber });
  return book;
};

const getBooksByFilter = async (filterObject) => {
  const bookList = await Book.find(filterObject);
  return bookList;
};

const updateBookQuantity = async (isbnNumber, bookQuantity) => {
  const updateResult = await Book.updateOne(
    { isbnNumber },
    { $set: { quantity: bookQuantity } }
  );
  return updateResult.matchedCount > 0;
};

const deleteBook = async (isbnNumber) => {
  const deleteResult = await Book.deleteOne({ isbnNumber });
  return deleteResult.deletedCount > 0;
};

module.exports = { addBook };
