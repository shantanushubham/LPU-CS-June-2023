console.log("Inside functions.js");

let addNumbers = (...numbers) => {
  let sum = 0;
  numbers.forEach((number) => (sum += number));
  console.log("Inside addNumbers.", sum);
  return sum;
};

let multiplyTwoNumbers = (a, b) => a * b;

module.exports = {
  addNumbers,
  multiplyTwoNumbers,
};
