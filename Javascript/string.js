// let text = "Lovely Professional University";
// console.log(text.length);

// // 1. slice(start, end);

// text = "Apple, Banana, Kiwi";
// let part = text.slice(7, 13);
// console.log(part);
// part = text.slice(-12, -6);
// console.log(part);

// // 2. substring(start, end);

// part = text.substring(7, 13);
// console.log(part);

// // 3. substr(start, lengthOfPart)
// part = text.substr(7, 10);
// console.log(part);
// console.log(text.substr(-7));

// let text = "Lovely Professional UniVersity! University";
// let newText = text.replaceAll(/University/gi, "University, Jalandhar");
// console.log(newText);

// let name = "Prashant";
// console.log(name.toLowerCase());

// let t1 = "Hello";
// let t2 = "World!";
// let t3 = t1.concat(" ", t2); // t1 + " " + t2
// console.log(t3);

// let t1 = "         Hello World          ";
// t2 = t1.trim();
// console.log(t2);

// String Template-ing or String Interpolation
// let name = "Prashant";
// let str = `The name is: ${name}`;
// console.log(str);

// let str1 = "Hello";
// str1 = str1 + "World";
// console.log(str1);

// ["Hello"]["World"]["Hello World"][][][]
//                        str1

let text = "5";
let paddedText = text.padEnd(4, "0");
console.log(paddedText);
