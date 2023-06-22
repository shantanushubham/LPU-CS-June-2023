const express = require("express");
const router = express.Router();
const taskController = require("../controllers/task-controller");

router.post("/add", taskController.addNewTask);

module.exports = router;
