const userRepository = require("../repositories/user-repository");
const InvalidInputException = require("../exceptions/InvalidInputException");
const User = require("../models/User");

const USER_EDITABLE_FIELDS = ["name", "age", "password"];

const addNewUser = async (user) => {
  user = await userRepository.addNewUser(user);
  const token = user.generateToken();
  return { user, token };
};

const getUserById = async (id) => {
  const user = await userRepository.getUserById(id);
  return user;
};

const getAllUsers = async () => {
  return await userRepository.getAllUsers();
};

const getUserInfoWithTasks = async (user) => {
  await user.populate("tasks");
  return user;
};

const updateUserById = async (user, dataToUpdate) => {
  const parametersToUpdate = Object.keys(dataToUpdate);
  const isValidUpdate = parametersToUpdate.every((parameter) => {
    return USER_EDITABLE_FIELDS.includes(parameter);
  });
  if (!isValidUpdate) {
    throw new InvalidInputException(
      "User",
      "Please enter valid fields for the entity."
    );
  }
  parametersToUpdate.forEach((parameter) => {
    user[parameter] = dataToUpdate[parameter];
  });
  await user.save();
};

const deleteUserById = async (userId) => {
  const isDeleted = await userRepository.deleteUserById(userId);
  return isDeleted;
};

const loginUser = async (email, password) => {
  let user = await User.findByEmailAndPasswordForAuth(email, password);
  const token = user.generateToken();
  return { user, token };
};

module.exports = {
  addNewUser,
  getUserById,
  getAllUsers,
  updateUserById,
  deleteUserById,
  loginUser,
  getUserInfoWithTasks,
};
