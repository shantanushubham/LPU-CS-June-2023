function getFibonacciNumber(n) {
  if (n === 0 || n === 1) {
    return n;
  } else {
    return getFibonacciNumber(n - 1) + getFibonacciNumber(n - 2);
  }
}

let a = 5;
console.log(getFibonacciNumber(50));
console.log(a);
