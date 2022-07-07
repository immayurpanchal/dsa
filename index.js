import { insertionSort } from './src/sorting/3_insertion';
console.log('Hello');

const arr = [3, 5, 2, 7, -10, -20, 1];
console.log('before', arr);
insertionSort(arr);
console.log('after', arr);
