require("./mongooseFile");

const express = require("express");
const User = require("./models/User");
const app = express();
app.use(express.json());

const USER_EDITABLE_FIELDS = ["name", "age", "password"];

app.post("/add-user", async (req, res) => {
  try {
    const { name, email, age, password } = req.body;
    const user = new User({ name, email, age, password });
    await user.save();
    console.log(`New User was with email: ${user.email} was added.`);
    return res.status(201).send(user);
  } catch (err) {
    console.error(err);
    return res.status(400).send({ message: err.message });
  }
});

app.get("/user/:id", async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.id });
    console.log(`User with Age: 24 was found.`);
    return res.status(200).send(user);
  } catch (err) {
    console.error(err);
    return res.status(500).send({ message: err.message });
  }
});

// Task1:
// Write an API to update a user.
// Take info from Request Body
// Take User ID from PATH param

app.put("/user/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const dataToUpdate = req.body;
    let updateObject = {};
    for (let field of USER_EDITABLE_FIELDS) {
      if (dataToUpdate[field]) {
        updateObject[field] = dataToUpdate[field];
      }
    }
    if (Object.keys(updateObject).length) {
      const updateResult = await User.updateOne(
        { _id: id },
        { $set: updateObject }
      );
      if (updateResult.matchedCount) {
        console.log(
          `Update success! User with ID: ${id} was successfully updated`
        );
        return res.status(200).send({
          message: "Update Successful",
        });
      }
      console.error(`Update Failed! User with ID: ${id} was not found.`);
      return res.status(404).send({ message: "Update Failed!" });
    } else {
      return res.status(400).send({ message: "Please use valid fields." });
    }
  } catch (err) {
    console.error(err);
  }
});

// Task2:
// Write an API to delete a user.
// Take User ID from PATH param

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Tasks Mongo App is running on PORT: ${PORT}`);
});
