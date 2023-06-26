const InvalidInputException = require("../exceptions/InvalidInputException");
const User = require("../models/User");

const addNewUser = async (user) => {
  try {
    user = new User(user);
    await user.save();
    console.log(`New User was with email: ${user.email} was added.`);
    return user;
  } catch (err) {
    throw new InvalidInputException(
      "User",
      "Please enter valid fields for the entity."
    );
  }
};

const getUserById = async (userId) => {
  const user = await User.findOne({ _id: userId });
  if (!user) {
    console.log(`User with ID: ${userId} does not exist in the database.`);
    return null;
  }
  console.log(
    `User with ID: ${userId} was successfully fetched from the database.`
  );
  return user;
};

const getAllUsers = async () => {
  const userList = await User.find();
  console.log(`Fetched all users! Total count: ${userList.length}`);
  return userList;
};

const updateUserById = async (userId, updateObject) => {
  const updateResult = await User.updateOne(
    { _id: userId },
    { $set: updateObject }
  );
  if (updateResult.matchedCount) {
    console.log(
      `Update success! User with ID: ${userId} was successfully updated`
    );
    return true;
  }
  console.error(`Update Failed! User with ID: ${userId} was not found.`);
  return false;
};

const deleteUserById = async (userId) => {
  const deleteResult = await User.deleteOne({ _id: userId });
  if (deleteResult.deletedCount) {
    console.log(
      `Delete success! User with ID: ${userId} was successfully deleted`
    );
    return true;
  }
  console.error(`Delete Failed! User with ID: ${userId} was not found.`);
  return false;
};

const getUserByEmail = async (email) => {
  let user = await User.findOne({ email });
  if (!user) {
    console.log(`User with email: ${email} does not exist in the database.`);
    return null;
  }
  console.log(
    `User with ID: ${email} was successfully fetched from the database.`
  );
  return user;
};

module.exports = {
  addNewUser,
  getUserById,
  getAllUsers,
  updateUserById,
  deleteUserById,
  getUserByEmail,
};
