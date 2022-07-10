// 30204 -> 2
function countZeros(n, count) {
  let newCount = count;
  if (n < 10) return n % 10 === 0 ? ++newCount : newCount;
  if (n % 10 === 0) ++newCount;
  return countZeros(parseInt(n / 10), newCount);
}
console.log(countZeros(30200040000, 0));
