const { model, Schema } = require("mongoose");

const BookSchema = new Schema({
  isbnNumber: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  author: { type: String, required: true },
  quantity: { type: Number, min: 0, default: 0 },
  price: { type: Number, min: 1, required: true },
  edition: { type: String, required: true },
});

const Book = model("Book", BookSchema);

module.exports = Book;
