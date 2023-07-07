const bookIssueController = require("../controller/book-issue-controller");
const express = require("express");
const router = express.Router();
const { authMiddleware } = require("../middlewares/auth-middleware");
const { librarianMiddleware } = require("../middlewares/librarian-middleware");

router.post(
  "/add",
  authMiddleware,
  librarianMiddleware,
  bookIssueController.addNewBookIssue
);

module.exports = router;
