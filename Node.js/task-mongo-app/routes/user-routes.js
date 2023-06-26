const express = require("express");
const userController = require("../controllers/user-controller");
const router = express.Router();

router.post("/add", userController.addNewUser);
router.get("/:id", userController.getUserById);
router.get("/get/all", userController.getAllUsers);
router.put("/:id", userController.updateUserById);
router.delete("/:id", userController.deleteUserById);
router.post("/login", userController.loginUser);

module.exports = router;
