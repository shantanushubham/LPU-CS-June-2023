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

module.exports = { addNewTask };
