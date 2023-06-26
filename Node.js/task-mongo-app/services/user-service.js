const userRepository = require("../repositories/user-repository");
const InvalidInputException = require("../exceptions/InvalidInputException");
const User = require("../models/User");

const USER_EDITABLE_FIELDS = ["name", "age", "password"];

const addNewUser = async (user) => {
  user = await userRepository.addNewUser(user);
  return user;
};

const getUserById = async (id) => {
  const user = await userRepository.getUserById(id);
  return user;
};

const getAllUsers = async () => {
  return await userRepository.getAllUsers();
};

const updateUserById = async (userId, dataToUpdate) => {
  let updateObject = {};
  USER_EDITABLE_FIELDS.forEach(
    (field) =>
      dataToUpdate[field] && (updateObject[field] = dataToUpdate[field])
  );
  if (Object.keys(updateObject).length) {
    const isUpdated = await userRepository.updateUserById(userId, updateObject);
    return isUpdated;
  }
  throw new InvalidInputException(
    "User",
    "Please enter valid fields for the entity."
  );
};

const deleteUserById = async (userId) => {
  const isDeleted = await userRepository.deleteUserById(userId);
  return isDeleted;
};

const loginUser = async (email, password) => {
  return await User.findByEmailAndPasswordForAuth(email, password);
};

module.exports = {
  addNewUser,
  getUserById,
  getAllUsers,
  updateUserById,
  deleteUserById,
  loginUser,
};
