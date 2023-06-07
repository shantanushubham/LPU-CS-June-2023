/*
    function nameOfFunction(Argument list) {
      function body
    }


    let/const nameOfFunction = (Argument list) => {
      function body
    }

*/

// function addTwoNumbers(a, b) {
//   return a + b;
// }

// let sum = addTwoNumbers(5, "CipherSchools!");
// console.log(sum);

// let addTwoNumbers = function (a, b) {
//   return a + b;
// };

// let sum = addTwoNumbers(5, 6);
// console.log(sum);

// Arrow Functions

// let subtractTwoNumbers = (a, b) => a - b;

// console.log(subtractTwoNumbers(10, 5));

let testFunction = (arg1, callback) => {
  console.log("Argument 1 is: ", arg1);
  callback();
};

let myFunction = () => console.log("This is inside myFunction");

testFunction("Shantanu", myFunction);
