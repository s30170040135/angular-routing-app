import _ from 'lodash';
import { add, subtract } from './mathOperations.js';

console.log("Addition:", add(10, 5));
console.log("Subtraction:", subtract(10, 5));

// Using Lodash to find the maximum number in an array
const numbers = [10, 5, 20, 8];
console.log("Max Number:", _.max(numbers)); // Output: 20
