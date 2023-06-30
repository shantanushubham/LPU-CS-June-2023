const express = require("express");
const userController = require("../controllers/user-controller");
const { authMiddleware } = require("../middlewares/auth-middleware");
const router = express.Router();

router.post("/add", userController.addNewUser);
router.get("/:id", authMiddleware, userController.getUserById);
router.get("/get/all", authMiddleware, userController.getAllUsers);
router.put("/:id", authMiddleware, userController.updateUserById);
router.delete("/:id", authMiddleware, userController.deleteUserById);
router.post("/login", userController.loginUser);
router.post("/logout", authMiddleware, userController.logoutUser);
router.get("/current/me", authMiddleware, userController.getUserInfoWithTasks);

module.exports = router;
