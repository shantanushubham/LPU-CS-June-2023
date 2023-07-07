const { model, Schema } = require("mongoose");

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

const BookIssue = model("BookIssue", BookIssueSchema);

module.exports = BookIssue;
