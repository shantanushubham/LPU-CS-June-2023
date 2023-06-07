function myFunction() {
  let a = 5;
  let testFunction = function () {
    a = 6;
    console.log("This is inside setTimeout", a);
  };
  setTimeout(testFunction, 0);
  return a;
}

console.log(myFunction());
