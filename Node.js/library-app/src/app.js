const express = require("express");
const app = express();
require("./appMongoose");

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Library App is running on ${PORT}`);
});
