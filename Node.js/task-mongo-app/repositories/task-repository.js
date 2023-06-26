const InvalidInputException = require("../exceptions/InvalidInputException");
const Task = require("../models/Task");

const addNewTask = async (task) => {
  try {
    task = new Task(task);
    await task.save();
    console.log(`Task with ID: ${task._id} was successfully added.`);
    return task;
  } catch (err) {
    throw InvalidInputException("Task", "Please enter valid input for entity.");
  }
};

const getTaskById = async (taskId) => {
  let task = await Task.findOne({ _id: taskId });
  if (!task) {
    console.warn(`Task with ID: ${taskId} was not found.`);
    return null;
  }
  console.info(`Task with iD: ${taskId} was successfully found.`);
  return task;
};

// Write a DB Call which returns the list of tasks
// for a given User by ID.

const getTasksByUserId = async (userId) => {
  let taskList = await Task.find({ owner: userId });
  return taskList;
};

const deleteTaskById = async (taskId) => {
  let deleteResult = await Task.deleteOne({ _id: taskId });
  if (!deleteResult.deletedCount) {
    console.warn(`Delete Failed: Task with ID: ${taskId} was not deleted.`);
    return false;
  }
  console.info(`Delete Success: Task with ID: ${taskId} was deleted.`);

  return true;
};

const updateTaskById = async (taskId, task) => {
  let updateResult = await Task.updateOne({ _id: taskId }, { $set: task });
  if (!updateResult.modifiedCount) {
    console.warn(`Update Failed: Task with ID: ${taskId} was not updated.`);
    return false;
  }
  console.info(`Update Success: Task with ID: ${taskId} was updated.`);
  return true;
};

module.exports = { addNewTask, getTaskById, deleteTaskById, updateTaskById };
