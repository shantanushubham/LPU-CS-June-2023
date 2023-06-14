const express = require("express");
const {
  getAllTasks,
  addNewTask,
  getTaskById,
  deleteTaskById,
  updateTaskById,
} = require("./utils/Task");

const app = express();
app.use(express.json());

app.get("/tasks", (req, res) => {
  let tasks = getAllTasks();
  return res.status(200).send(tasks);
});

app.post("/tasks", (req, res) => {
  let task = { ...req.body };
  task = addNewTask(task);
  return res.status(201).send({
    message: "Task successfully created",
    task,
  });
});

app.get("/tasks/:taskId", (req, res) => {
  let taskId = req.params.taskId;
  let task = getTaskById(taskId);
  if (!task) {
    return res.status(404).send({
      message: `Task with ID: ${taskId} was not found.`,
    });
  }
  return res.status(200).send(task);
});

/* 
  Use app.delete() to delete a task by ID.
*/
app.delete("/tasks/:taskId", (req, res) => {
  let taskId = req.params.taskId;
  let isDeleted = deleteTaskById(taskId);
  if (!isDeleted) {
    return res.status(404).send({
      message: `Delete Failed! Task with ID: ${taskId} was not found.`,
    });
  }
  return res.status(200).send({
    message: `Delete Success! Task with ID: ${taskId} was deleted.`,
  });
});

app.put("/tasks", (req, res) => {
  let taskBody = req.body;
  let { taskId } = taskBody;
  let isUpdated = updateTaskById(taskBody);
  if (!isUpdated) {
    return res.status(404).send({
      message: `Update Failed! Task with ID: ${taskId} was not found.`,
    });
  }
  return res.status(200).send({
    message: `Update Success! Task with ID: ${taskId} was updated.`,
  });
});

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`The Server is running on ${PORT}`);
});
