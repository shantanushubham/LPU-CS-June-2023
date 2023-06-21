require("./mongooseFile");

const express = require("express");
const app = express();
const userRoute = require("./routes/user-routes");
app.use(express.json());

app.use("/user", userRoute);

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Tasks Mongo App is running on PORT: ${PORT}`);
});
