function isOdd(n) {
  return (n & 1) === 1;
}

function isEven(n) {
  return (n & 1) === 0;
}

console.log(isOdd(11));
console.log(isOdd(12));
console.log(isEven(210));
console.log(isEven(213));
