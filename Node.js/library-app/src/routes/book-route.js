const express = require("express");
const router = express.Router();
const bookController = require("../controller/book-controller");

router.post("/add", bookController.addBook);

module.exports = router;
