// is number power of 2?
// logic -> power of 2 have only 1 bit is on all other bits are off
// 8 -> 1000 in binary -> count the 1's if it's exactly 1 then it is power of 2
function isPowerOf2(num) {
  let counter = 0;
  while (num > 0) {
    num & 1 ? ++counter : counter;
    num >>= 1;
  }
  return counter === 1;
}

function powerOf2RecursionHelper(num, count) {
  if (num <= 0) return count;
  const temp = num & 1 ? count + 1 : count;
  return powerOf2RecursionHelper(num >> 1, temp);
}

function isPowerOf2Recursion(num) {
  return powerOf2RecursionHelper(num, 0) === 1;
}

console.log(isPowerOf2(8));
console.log(isPowerOf2Recursion(8));
