let myUser = {
  name: "Shantanu",
  func1: () => {
    console.log("Hello " + this.name);
  },
  func2: function () {
    console.log("Hello " + this.name);
  },
};

myUser.func1();
myUser.func2();

