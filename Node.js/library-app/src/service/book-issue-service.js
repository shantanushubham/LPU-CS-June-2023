const InputValidationException = require("../exceptions/InputValidationException");
const BookIssue = require("../models/BookIssue");

const addNewBookIssue = async (bookIssue) => {
  try {
    bookIssue = new BookIssue(bookIssue);
    await bookIssue.save();
    return bookIssue;
  } catch (err) {
    console.error(err);
    throw new InputValidationException("Please enter valid details.");
  }
};

module.exports = {addNewBookIssue }