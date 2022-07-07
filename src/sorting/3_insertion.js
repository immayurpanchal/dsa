export function insertionSort(arr = []) {
  for (let j = 1; j < arr.length; j++) {
    // create a copy of current value
    const currentValue = arr[j];
    let i = j;
    // if value on the left side is greater then move to right
    // repeat this until the lesser value is found
    while (arr[i - 1] > currentValue) {
      arr[i] = arr[i - 1];
      i--;
    }
    // place the value at that index and break the loop
    arr[i] = currentValue;
  }
}
