import _ from 'lodash';
import moment from 'moment';
import axios from 'axios';
import { add, subtract } from './mathOperations.js';

console.log("Addition:", add(10, 5));
console.log("Subtraction:", subtract(10, 5));

// Using Lodash
const numbers = [10, 5, 20, 8];
console.log("Max Number:", _.max(numbers));

// Using Moment.js to format the current date
console.log("Current Date:", moment().format('YYYY-MM-DD HH:mm:ss'));
// Creating and formatting dates, parsing and validating dates, date calculations, relative time display, timezone handling
// Lodash - array operations, object handling, string manipulation

// Using Axios - Simple GET Request
axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => console.log("Axios GET Response:", response.data))
    .catch(error => console.error("Axios Error:", error));
    
// ---------------- Higher-Order, Lower-Order, and Callback Functions ---------------- //

// Lower-Order Function (Simple Function)
function lowerOrderFunction() {
    console.log("I am a lower-order function");
}
lowerOrderFunction();

// Higher-Order Function (Takes Another Function as an Argument)
function higherOrderFunction(callback) {
    console.log("Before executing callback");
    callback(); // Calling the function passed as an argument
    console.log("After executing callback");
}

function myCallback() {
    console.log("Callback function executed");
}

// Passing myCallback() as an argument
higherOrderFunction(myCallback);

// Using a Callback Function (Executed After Delay)
function fetchData(callback) {
    setTimeout(() => {
        callback("Data received after 2 seconds");
    }, 2000);
}

fetchData((data) => console.log(data));
