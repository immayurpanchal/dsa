// abc
function permutations(p, up) {
  if (!up) return console.log(p);

  const ch = up[0];

  for (let i = 0; i <= p.length; i++) {
    const firstString = p.substr(0, i);
    const secondString = p.substr(i, p.length);
    permutations(firstString + ch + secondString, up.substr(1));
  }
}

// permutations('', 'abc');

// function swap(str, index1, index2){
//   const strArr = [...str]
//   const temp = strArr[index1];
//   strArr[index1] = strArr[index2]
//   strArr[index2] = temp;
//   return strArr.join('');
// }

function swap(arr, index1, index2) {
  const temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

// arr = [1,2,3]
function permutations2(arr, index, ans) {
  // base case
  if (index >= arr.length) {
    ans.push([...arr]);
    return;
  }

  for (let i = index; i < arr.length; i++) {
    swap(arr, index, i);
    permutations2(arr, index + 1, ans);
    swap(arr, index, i);
  }
}

const arr = [1, 2, 3];
const ans = [];
// permutations2(arr, 0, ans);

function permute3(arr) {
  // base case -> if there are no items in the array means return the empty array
  if (!arr.length) return [];

  // remove the first item and store it in a variable
  const firstItem = arr.shift();

  // ansArr = call the permutation with remaining items
  const ansArr = permute3(arr);

  // add the removed item in the ansArr
  ansArr.push(firstItem);
  return ansArr;
}

console.log(permute3(arr));
console.log('hi');
console.log(ans);
