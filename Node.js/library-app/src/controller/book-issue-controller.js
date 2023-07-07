const InputValidationException = require("../exceptions/InputValidationException");
const bookIssueService = require("../service/book-issue-service");

const addNewBookIssue = async (req, res, next) => {
  try {
    const bookIssue = await bookIssueService.addNewBookIssue({
      ...req.body,
      librarianId: req.user._id,
    });
    console.info(
      `BookIssue with ID: ${bookIssue._id} was created for the Book with ISBN: ${bookIssue.isbnNumber} for Student with ID: ${bookIssue.studentId} by Librarian with ID: ${bookIssue.librarianId}`
    );
    return res.status(201).send(bookIssue);
  } catch (err) {
    console.error(err);
    return res
      .status(err instanceof InputValidationException ? 400 : 500)
      .send({ message: err.message });
  }
};

module.exports = { addNewBookIssue };
