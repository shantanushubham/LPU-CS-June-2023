const InputValidationException = require("../exceptions/InputValidationException");
const bookService = require("../service/book-service");

const addBook = async (req, res) => {
  try {
    const book = await bookService.addBook({ ...req.body });
    return res.status(201).send(book);
  } catch (err) {
    console.error(err);
    return res
      .status(err instanceof InputValidationException ? 400 : 500)
      .send({ message: err.message });
  }
};

module.exports = { addBook };
