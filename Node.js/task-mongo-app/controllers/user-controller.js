// Controller can also be called as Resource

const InvalidInputException = require("../exceptions/InvalidInputException");
const userService = require("../services/user-service");

const addNewUser = async (req, res) => {
  try {
    const { name, email, age, password } = req.body;
    let user = { name, email, age, password };
    user = await userService.addNewUser(user);
    return res.status(201).send(user);
  } catch (err) {
    console.error(err);
    if (err instanceof InvalidInputException) {
      return res.status(400).send({ message: "Please use valid fields." });
    }
    return res.status(500).send({ message: err.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const userList = await userService.getAllUsers();
    return res.status(200).send(userList);
    f;
  } catch (err) {
    console.error(err);
    return res.status(500).send({ message: err.message });
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await userService.getUserById(req.params.id);
    return res.status(200).send(user);
  } catch (err) {
    console.error(err);
    return res.status(500).send({ message: err.message });
  }
};

const updateUserById = async (req, res) => {
  try {
    const { id } = req.params;
    let dataToUpdate = req.body;
    const isUpdated = await userService.updateUserById(id, dataToUpdate);
    if (isUpdated) {
      return res.status(200).send({ message: "Update Successful" });
    }
    return res.status(404).send({ message: "Update Failed!" });
  } catch (err) {
    console.error(err);
    if (err instanceof InvalidInputException) {
      return res.status(400).send({ message: "Please use valid fields." });
    }
    return res.status(500).send({ message: err.message });
  }
};

const deleteUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const isDeleted = await userService.deleteUserById(id);
    if (isDeleted) {
      return res.status(200).send({ message: "Delete Successful" });
    }
    return res.status(404).send({ message: "Delete Failed!" });
  } catch (err) {
    console.error(err);
    return res.status(500).send({ message: err.message });
  }
};

const loginUser = async (req, res) => {
  try {
    let { email, password } = req.body;
    let user = await userService.loginUser(email, password);
    return res.status(200).send(user);
  } catch (err) {
    console.error(err);
    return res.status(500).send({ message: err.message });
  }
};

module.exports = {
  addNewUser,
  getUserById,
  getAllUsers,
  updateUserById,
  deleteUserById,
  loginUser,
};
