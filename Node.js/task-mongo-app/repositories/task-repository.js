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

module.exports = { addNewTask };
