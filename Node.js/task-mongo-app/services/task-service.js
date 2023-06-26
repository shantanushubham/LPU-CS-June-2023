const taskRepository = require("../repositories/task-repository");

const TASK_EDITABLE_FIELDS = ["title", "description"];

const addNewTask = async (task) => {
  return await taskRepository.addNewTask(task);
};

const getTaskById = async (taskId) => {
  return await taskRepository.getTaskById(taskId);
};

const deleteTaskById = async (taskId) => {
  return await taskRepository.deleteTaskById(taskId);
};

const updateTaskById = async (taskId, dataToUpdate) => {
  let taskDataToUpdate = {};
  TASK_EDITABLE_FIELDS.forEach((field) => {
    taskDataToUpdate[field] = dataToUpdate[field];
  });
  return await taskRepository.updateTaskById(taskId, taskDataToUpdate);
};

module.exports = { addNewTask, getTaskById, deleteTaskById, updateTaskById };
