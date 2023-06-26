const InvalidInputException = require("../exceptions/InvalidInputException");
const taskService = require("../services/task-service");

const addNewTask = async (req, res) => {
  try {
    const { title, description, owner } = req.body;
    let task = { title, description, owner };
    task = await taskService.addNewTask(task);
    return res.status(201).send(task);
  } catch (err) {
    console.error(err);
    if (err instanceof InvalidInputException) {
      return res.status(400).send({ message: "Invalid Inputs." });
    }
    return res.status(500).send({ message: err.message });
  }
};

const getTaskById = async (req, res) => {
  try {
    const { id: taskId } = req.params;
    let task = await taskService.getTaskById(taskId);
    if (!task) {
      return res
        .status(404)
        .send({ message: `Task with ID: ${taskId} was not found.` });
    }
    return res.status(200).send(task);
  } catch (err) {
    console.error(err);
    return res.status(500).send({ message: err.message });
  }
};

const deleteTaskById = async (req, res) => {
  try {
    const { id: taskId } = req.params;
    let isDeleted = await taskService.deleteTaskById(taskId);
    if (!isDeleted) {
      return res.status(404).send({
        message: `Delete Failed: Task with ID: ${taskId} was not found.`,
      });
    }
    return res.status(200).send({ message: `Delete Success` });
  } catch (err) {
    console.error(err);
    return res.status(500).send({ message: err.message });
  }
};

const updateTaskById = async (req, res) => {
  try {
    const { id: taskId } = req.params;
    let dataToUpdate = req.body;
    let isUpdated = await taskService.updateTaskById(taskId, dataToUpdate);
    if (!isUpdated) {
      return res.status(404).send({
        message: `Update Failed: Task with ID: ${taskId} was not found.`,
      });
    }
    return res.status(200).send({ message: `Update Success` });
  } catch (err) {
    console.error(err);
    return res.status(500).send({ message: err.message });
  }
};

module.exports = { addNewTask, getTaskById, deleteTaskById, updateTaskById };
