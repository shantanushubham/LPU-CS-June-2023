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

const getUserInfoWithTasks = async (req, res) => {
  try {
    let user = req.user;
    await userService.getUserInfoWithTasks(user);
    console.log(
      `User info with Tasks for user ID: ${user._id} was successfully fetched.`
    );
    return res.status(200).send(user);
  } catch (err) {
    console.error(err);
    return res.status(500).send({ message: err.message });
  }
};

const updateUserById = async (req, res) => {
  try {
    const { user, body: dataToUpdate } = req;
    await userService.updateUserById(user, dataToUpdate);
    return res.status(200).send({ message: "Update Successful." });
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
    const { user } = req;
    const isDeleted = await userService.deleteUserById(user._id);
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

const logoutUser = async (req, res) => {
  try {
    const { user, token: sentToken } = req;
    user.tokens = user.tokens.filter(
      (tokenObject) => sentToken !== tokenObject.token
    );
    user.save();
    return res.status(200).send();
  } catch (err) {
    console.error(err);
    return res.status(500).send({ message: err.message });
  }
};

const logoutUserFromEverywhere = async (req, res) => {
  try {
    const { user } = req;
    user.tokens = [];
    user.save();
    return res.status(200).send();
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
  getUserInfoWithTasks,
  logoutUser,
  logoutUserFromEverywhere,
};
