// 13425 -> 120
function productOfDigits(n) {
  if (n <= 1) return n % 10;
  return (n % 10) * productOfDigits(parseInt(n / 10));
}

console.log(productOfDigits(13425));
