let obj = {
  name: "Shashi",
  age: 20,
  gender: "F",
};

let editableFields = ["age", "name"];

let newObj = {
  name: "Shashi123",
  age: 21,
  gender: "F",
  college: "LPU",
};

for (let field of editableFields) {
  console.log(field);
  obj[field] = newObj[field];
}

console.log(obj);
