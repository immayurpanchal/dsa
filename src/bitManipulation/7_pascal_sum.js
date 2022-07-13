// find sum of the nth row
//    1.   = 1
//   1 1.   = 2
//. 1 2 1.   = 4
//. 1 3 3 1   = 8
// formula = 2^(n-1)
function pascalSum(row) {
  return 2 ** (row - 1);
}

console.log(pascalSum(10));
