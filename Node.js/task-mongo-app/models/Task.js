const { Schema, model } = require("mongoose");

const TaskSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    isComplete: { type: Boolean, default: false },
    owner: { type: Schema.Types.ObjectId, require: true, ref: "User" },
  },
  {
    timestamps: true,
  }
);

const TaskModel = model("Task", TaskSchema);

module.exports = TaskModel;
