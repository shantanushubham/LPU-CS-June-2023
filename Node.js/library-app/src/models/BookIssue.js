const { model, Schema } = require("mongoose");
const Book = require("../models/Book");

const BookIssueSchema = new Schema(
  {
    studentId: { type: Schema.Types.ObjectId, required: true, ref: "User" },
    librarianId: { type: Schema.Types.ObjectId, required: true, ref: "User" },
    bookId: { type: Schema.Types.ObjectId, required: true, ref: "Book" },
    issueDate: {
      type: Date,
      default: new Date(),
      validate: {
        validator(date) {
          return date <= new Date();
        },
      },
    },
    status: { type: String, enum: ["ISSUED", "RETURNED"], default: "ISSUED" },
  },
  { timestamps: true }
);

BookIssueSchema.pre("save", async function (next) {
  const bookIssue = this;
  let value = 0;
  if (bookIssue.isNew) {
    value = 1;
  } else {
    if (bookIssue.modifiedPaths().includes("status")) {
      if (bookIssue.status === "RETURNED") {
        value = -1;
      } else {
        value = 1;
      }
    }
  }
  if (value) {
    await Book.updateOne(
      { _id: bookIssue.bookId },
      { $inc: { issuedQuantity: value } }
    );
  }
  next();
});

const BookIssue = model("BookIssue", BookIssueSchema);

module.exports = BookIssue;
