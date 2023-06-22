require("./mongooseFile");

const express = require("express");
const app = express();
const userRoute = require("./routes/user-routes");
const taskRoute = require("./routes/task-routes");
app.use(express.json());

app.use("/user", userRoute);
app.use("/task", taskRoute);

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Tasks Mongo App is running on PORT: ${PORT}`);
});
