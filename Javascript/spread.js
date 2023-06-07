/*
  Spread is represented by "..."
*/

// let array = [1, 2, 3, 4, 5];
// let array2 = [99, 88, 77, 66, 55];
// let array3 = [...array, ...array2];
// console.log(array3);
// // [1,2,3,4,5,6]

// let obj = {
//   name: "Shantanu",
//   state: "Jharkhand",
// };

// console.log({ ...obj, array: [...array, ...array2] });

/*
  Rest Operator is represented by "..."
  Java: VarArgs
  Java: List<Integer> list =  Arrays.asList(1, 2, 4, 5, 7)
*/

function addNumbers(...args) {
  let sum = 0;
  args.forEach((arg) => (sum += arg));
  return sum;
}

let sum = addNumbers(2, 3, 4, 5, 6, 77, 11, 9, 0);
console.log(sum);
