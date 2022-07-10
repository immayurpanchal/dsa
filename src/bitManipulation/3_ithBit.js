// find i th  bit
function findBit(num, n) {
  let a = 1;
  a <<= n - 1; // move 1 to that # of bits
  return (num & a) === a ? 1 : 0; // doing & returns a itself if digits is 1 else 0
}

console.log(findBit(8, 4));
