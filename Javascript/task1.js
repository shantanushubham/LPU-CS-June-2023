/*
  1. Create a 'user' object with the following fields.
    * name -> String
    * age -> number
    * address -> object containing state and city
    * getFirstName -> function to get the first name of the user
    * getDetails -> function that prints the details of the user in the format:
        "The user's name is <firstName> and they are <age> years old. 
        They live in <city>, <state>"
  
  2. Call getDetails from the user object.

*/

const user = {
  name: "John Doe",
  age: 30,
  address: {
    state: "Punjab",
    city: "Jalandhar",
  },
  getFirstName: function () {
    return this.name.split(" ")[0];
  },
  getDetails: function () {
    console.log(
      `The user's name is ${this.getFirstName()} and they are ${
        this.age
      } years old. They live in ${this.address.city}, ${this.address.state}.`
    );
  },
};

user.getDetails();
