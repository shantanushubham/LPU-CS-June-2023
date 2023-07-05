const taskRepository = require("../repositories/task-repository");

const TASK_EDITABLE_FIELDS = ["title", "description"];

const addNewTask = async (task) => {
  return await taskRepository.addNewTask(task);
};

const getTaskById = async (taskId) => {
  return await taskRepository.getTaskById(taskId);
};

const getTasksForUser = async (user, all, pageSize, pageNumber, sortBy) => {
  // offset means how many records to skip to get the next set of records.
  // offset is calculated using pageNumber and pageSize
  // in MongoDb, offset is called 'skip'
  // limit means pageSize
  // sortBy = title:desc
  let options = {};
  if (!all) {
    options.limit = pageSize;
    options.skip = (pageNumber - 1) * pageSize;
  }
  let sortObj = {};
  if (sortBy) {
    let [field, order] = sortBy.split(":");
    sortObj[field] = order === "asc" ? 1 : -1;
  }
  await user.populate({
    path: "tasks",
    match: {},
    options: { ...options, sort: sortObj },
  });
  let foundTasks = user.tasks;
  return foundTasks;
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

module.exports = {
  addNewTask,
  getTaskById,
  deleteTaskById,
  updateTaskById,
  getTasksForUser,
};

// [][][][][][][][][][]
// [][][][][][][][][][]
// [][][][][][][][][][]

// pageNumber = 3
// pageSize = 5

// limit = 5
// offset = (pageNumber - 1) * pageSize
