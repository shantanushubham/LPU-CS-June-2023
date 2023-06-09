/*
  1. Create a function called lpuFunction that takes 2 arguments: 
    a. numberOfStudents -> number
    b. numberOfSeatsRemaining -> number

  2. Create a function called isAdmissionPossible that takes 2 arguments and returns a boolean:
    a. true -> If numberOfSeatsRemaining > numberOfStudents
    b. false -> Otherwise

    This function should take 5 seconds to execute.

  Use callbacks to print:
    a. "Admission Possible": if isAdmissionPossible returns true
    b. "Try next year": if isAdmissionPossible returns false


    Task 3:
    Do it with promises.
    Do it with async await
*/

const lpuFunction = (numberOfStudents, numberOfSeatsRemaining) => {
  isAdmissionPossible(numberOfStudents, numberOfSeatsRemaining, (err, data) => {
    if (err) {
      console.error(err);
    } else {
      console.log("Admission Possible");
    }
  });
};

const isAdmissionPossible = (
  numberOfStudents,
  numberOfSeatsRemaining,
  callback
) => {
  setTimeout(() => {
    if (numberOfSeatsRemaining > numberOfStudents) {
      callback(undefined, true);
    }
    return callback("Admission Not Possible");
  }, 5 * 1000);
};

lpuFunction(700, 1000);
