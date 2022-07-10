// 13425 -> 15
function sumOfDigits(n) {
  if (n < 1) return n % 10;
  return (n % 10) + sumOfDigits(parseInt(n / 10));
}

console.log(sumOfDigits(13425));
