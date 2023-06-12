let lpuFunction = (numberOfStudents, numberOfSeatsRemaining) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (numberOfSeatsRemaining > numberOfStudents) {
        resolve("Admission possible");
      } else {
        reject("Admission not possible");
      }
    }, 2000);
  });
};

function isAdmissionPossible() {
  lpuFunction(300, 200)
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
}

isAdmissionPossible();
