export function bubbleSort(arr) {
  for (let j = 0; j < arr.length - j; j++) {
    // move the largest value to the end
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        // swap values
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
  }
}

// 6,3,4,1,2
// 3,6,
