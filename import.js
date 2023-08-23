//reuse arrays, objects and functions from other js files  
import { data } from './export.js';
console.log(data);
// can import multipy at a time 
import { data2, data3 } from './export.js'
console.log(data2);
console.log(data3('bread stick'));

//can even modify the imported code 
let updatedData = data;
updatedData.push(5)
console.log(updatedData);


/*
**Challenge**

Inside of the file export.js, create a function add, that will receive 2 numbers and return the sum of them.
Make sure to export this function.

- Import the function add, into the import.js file
- Create a variable result, that will hold the result of the function add when you call it and pass 2 numbers into it.
- print into the console the value of the variable result;
*/

import { Add } from './export.js';
let result = Add(3, 5);
console.log(result);
