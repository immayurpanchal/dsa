function findUnique(arr) {
  let ans = 0;
  arr.forEach((value) => {
    ans ^= value;
  });
  return ans;
}

// If there are pairs of the numbers and one no. is unique. find the unique no.
const a = [2, 4, 6, 5, 4, 2, 5]; // ans = 6
console.log(findUnique(a));
