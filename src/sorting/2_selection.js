function getMaxIndex(arr, start, end) {
  let maxIndex = start;
  for (let i = start; i <= end; i++) {
    if (arr[i] > arr[maxIndex]) {
      maxIndex = i;
    }
  }
  return maxIndex;
}

function swap(arr, index1, index2) {
  let correctPosition = index2;
  let temp = arr[index1];
  arr[index1] = arr[correctPosition];
  arr[correctPosition] = temp;
}

export function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    // find the maximum from array
    const maxIndex = getMaxIndex(arr, 0, arr.length - i - 1);
    // swap max value to the correct index
    swap(arr, maxIndex, arr.length - 1 - i);
  }
}

// Selection Sort Learning Technique
// Select the maximum value and move it to the end of the array
// We can say that select item and put it at the correct position in the array
// 1.1 Learn to find the maximum value in the array in O(n-1)
// 1.2 Learn to swap array values in place
// 1.3 now repeat the entire process multiple times

import { selectionSort } from './src/sorting/2_selection';

const arr = [6, 8, 1, 5, 4, 2, 3];
console.log('original', arr);
selectionSort(arr);
console.log('after', arr);
