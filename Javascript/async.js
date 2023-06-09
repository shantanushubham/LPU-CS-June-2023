// function myFunction() {
//   let a = 5;
//   let testFunction = function () {
//     a = 6;
//     console.log("This is inside setTimeout", a);
//   };
//   setTimeout(testFunction, 0);
//   return a;
// }

// console.log(myFunction());

// this callback should be called with some data if the async code returns something

// function calledFunction(a, callback) {
//   function timeOutFunction() {
//     if (a < 10) {
//       // negative scenario
//       let err = new Error("a cannot be less than 10");
//       callback(err);
//     } else {
//       // positive scenario
//       callback(undefined, a * a);
//     }
//   }

//   setTimeout(timeOutFunction, 2 * 1000);
//   return a;
// }

// function callerFunction() {
//   let callbackFunction = (err, data) => {
//     if (err) {
//       console.error(err);
//     } else {
//       console.log(`The returned data is: ${data}`);
//     }
//   };
//   let value = calledFunction(5, callbackFunction);
//   console.log(value);
// }

// callerFunction();

// [(err, data) => {...}][][][]
//    callbackFunction

// PROMISE

let calledFunction = (a) => {
  return new Promise((resolve, reject) => {
    // resolve & reject are functions
    setTimeout(() => {
      if (a < 10) {
        // negative scenario
        let err = new Error("a cannot be less than 10");
        reject(err);
      } else {
        // positive scenario
        resolve(a * a);
      }
    }, 2 * 1000);
  });
};

// function callerFunction() {
//   calledFunction(15)
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((err) => {
//       console.error(err);
//     });
// }

// callerFunction();

// ASYNC and AWAIT

async function callerFunction() {
  try {
    let data = await calledFunction(15);
    console.log(data);
  } catch (err) {
    console.error(err);
  }
  return "Shantanu";
}

callerFunction().then((name) => {
  console.log(name);
});
