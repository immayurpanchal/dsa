// Reset i th bit
// if that bit is 1 then make it 0
// if it is zero then let it be
// num = 12, i = 3, ans = 8
function resetBit(num, n) {
  let i = 1;
  // move i to n - 1 bit
  i <<= n - 1;
  // complement the i
  i = ~i;
  // do & and that bit will be reset
  return num & i;
}

console.log(resetBit(12, 3));
