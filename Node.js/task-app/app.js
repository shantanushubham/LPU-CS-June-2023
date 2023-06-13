const express = require("express");

const app = express();

let addTwoNumbers = (a, b) => a + b;

let multiplyTwoNumbers = (a, b) => a * b;

app.get("/add", (req, res) => {
  let { a, b } = req.query;
  a = parseInt(a);
  b = parseInt(b);
  let sum = addTwoNumbers(a, b);
  console.log(sum);

  res.status(200).send(sum.toString());
  // There is no point to write any code after this line. It will run though
});

app.listen(8080, () => {
  console.log("Listening");
});
