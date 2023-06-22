const taskRepository = require("../repositories/task-repository");

const addNewTask = async (task) => {
  return await taskRepository.addNewTask(task);
};

module.exports = { addNewTask };
