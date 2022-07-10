// set i th bit
// if bit is zero then make it 1
// if it is already 1, then let it be
function setBit(num, n) {
  let i = 1;
  i <<= n - 1;
  return num | i;
}

console.log(setBit(16, 1));
