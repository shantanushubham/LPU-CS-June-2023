const fruits = ["Banana", "Orange", "Apple", "Mango", "Strawberry", "Mango"];
// // console.log(fruits.length);

// // console.log(fruits.toString());

// // console.log(fruits.join("+"));

// // In JS, an array can work like a double ended queue.
// // It is like a Deque
// // fruits.push("Strawberry");

// // console.log(fruits.shift());

// // fruits.unshift("Guava");

// // console.log(fruits);

// // const vegetables = ["Tomato", "Potato", "Carrot", "Radish", "Spinach"];
// // const spices = ["Chilly", "Turmeric", "Coriander", "Salt"];
// // let mergedArray = fruits.concat(vegetables, spices);
// // console.log(mergedArray);

// // const myArr = [
// //   [1, 2],
// //   [3, 4],
// //   [5, 6],
// // ];
// // console.log(myArr.flat());

// // splice() -> to add multiple elements in an array
// // It takes at least 3 arguments.
// // 1. The index from where we want to add new elements
// // 2. The number of elements that we want to delete from the given index.
// // 3. Comma separated list of elements that need to be added.
// // fruits.splice(2, 1, "Kiwi", "Strawberry");
// // console.log(fruits);

// // slice();
// // console.log(fruits.slice(1, 3));

// const numbers = [10, 8, 1, 5, 3, 6, 22, 2, 31];

// // numbers.sort((num1, num2) => num1 - num2);
// // console.log(numbers);

// let testArr = [
//   { name: "Shantanu", id: 4 },
//   { name: "Prashant", id: 7 },
// ];

// console.log(
//   testArr.sort((user1, user2) => {
//     return user2.id - user1.id;
//   })
// );

// forEach takes 1 argument which is a function
// It does not return anything
// This callback function can accept 2 args.
// 1. element
// 2. index
// fruits.forEach(function (fruit) {
//   console.log(`The fruit is: ${fruit}`);
// });

// map() takes 1 argument which is a callback function
// This callback function can accept 2 args.
// 1. element
// 2. index
// It returns a new array
// const numbers = [45, 4, 9, 16, 25];
// // I want a new array which contains the square of all elements in numbers.
// const squaredNumbers = numbers.map((number) => {
//   return number * number;
// });

// console.log(squaredNumbers);

// flatMap();
// const newArr = numbers.flatMap((number) => {
//   return [[number * 2]];
// });

// console.log(newArr);

// filter()

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const evenNumbers = numbers.filter((number) => {
//   return number % 2 === 0;
// });
// console.log(evenNumbers);

// every()
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, -10];
// let areAllPositive = numbers.every((number) => {
//   return number > -1;
// });
// console.log(areAllPositive);

// some()
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, "-10"];
// let areStrings = numbers.some((number) => {
//   return typeof number === "string";
// });
// console.log(areStrings);

// indexOf
// const position = fruits.lastIndexOf("Mango");
// console.log(position);

// find()
const numbers = [4, 9, 16, 25, 29];
let first = numbers.find((value) => {
  return value > 18;
});
console.log(first);
