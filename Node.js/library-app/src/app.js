const express = require("express");
const app = express();
require("./appMongoose");
const userRoute = require("./routes/user-route");
const bookRoute = require("./routes/book-route");

app.use(express.json());
app.use("/user", userRoute);
app.use("/book", bookRoute);

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Library App is running on ${PORT}`);
});
