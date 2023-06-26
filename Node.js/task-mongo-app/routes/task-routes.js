const express = require("express");
const router = express.Router();
const taskController = require("../controllers/task-controller");

router.post("/add", taskController.addNewTask);
router.get("/:id", taskController.getTaskById);
router.delete("/:id", taskController.deleteTaskById);
router.put("/:id", taskController.updateTaskById);

module.exports = router;
