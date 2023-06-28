const express = require("express");
const router = express.Router();
const taskController = require("../controllers/task-controller");
const { authMiddleware } = require("../middlewares/auth-middleware");

router.post("/add", authMiddleware, taskController.addNewTask);
router.get("/:id", authMiddleware, taskController.getTaskById);
router.delete("/:id", authMiddleware, taskController.deleteTaskById);
router.put("/:id", authMiddleware, taskController.updateTaskById);

module.exports = router;
