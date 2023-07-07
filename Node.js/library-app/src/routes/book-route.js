const express = require("express");
const router = express.Router();
const bookController = require("../controller/book-controller");
const { authMiddleware } = require("../middlewares/auth-middleware");
const { librarianMiddleware } = require("../middlewares/librarian-middleware");

router.post(
  "/add",
  authMiddleware,
  librarianMiddleware,
  bookController.addBook
);

module.exports = router;
