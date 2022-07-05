// import { LinkedList } from './src/LinkedList';

// const ll = new LinkedList();
// ll.add(10);
// ll.add(20);
// ll.add(30);
// ll.add(40);
// ll.printList();
// ll.insertRec(0, 55);
// ll.printList();

// Bubble Sort
// Swap values of 2 variables
let value1 = 10;
let value2 = 20;

// Before Swapping
console.log(value1, value2);

// Write Swapping Logic here - Start
// 1.1 Initial problem when writing like below
// value1 = value2;
// value2 = value1;

// 1.2 Now improve this using 3rd variable
// let temp = value1;
// value1 = value2;
// value2 = temp;

// 1.3 swapping without third variable
// value1 = value1 + value2;
// value2 = value1 - value2;
// value1 = value1 - value2;

// Swapping Logic - End
// After Swapping
console.log(value1, value2); // 20 10

// 1.4 Now Do a single pass sorting for understanding
// 1.5 After understanding single pass do it for every value
// 1.6 to improve the efficiency, ignore items from right side at each iteration because those items are already sorted

import { bubbleSort } from './src/sorting/1_bubble';

const arr = [6, 3, 4, 1, 2];
bubbleSort(arr);
console.log(arr);
