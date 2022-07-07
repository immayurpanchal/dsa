function swap(arr, index1, index2) {
  const temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

export function cycleSort(arr = []) {
  let i = 0;
  while (i < arr.length) {
    console.log('i', i);
    if (arr[i] === i + 1) {
      i++;
    } else {
      const value = arr[i];
      swap(arr, i, value);
    }
  }
}
