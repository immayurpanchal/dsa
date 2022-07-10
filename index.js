// 12345 -> 54321
function reverseNumber(n) {
  if (n <= 1) return n % 10;
  return '' + (n % 10) + reverseNumber(parseInt(n / 10));
}

console.log(reverseNumber(12345));
