/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function

// Arrow Function With Parameters

// Single Line Arrow Function With Parameters

// Implicit Returns

// Returning Multiple Lines



/**
 * THE SPEAD OPERATOR
 */

//No spread operator
let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2.push(4);
console.log("Second array:", arr2)
console.log("First array:", arr1)

// Copying an array
arr3 = [4, 5, 6];
let arr4 = [...arr3]
arr4.push(7)
console.log("Third array:", arr3)

console.log("Fourth array:", arr4)

// Copying an object
let obj1 = {a: 1, b: 2, c: 3};
let obj2 = {...obj1, d:4}
let obj3 = {...obj2, b: 5}
console.log("First object", obj1)
console.log("Second object", obj2)
console.log("Third object", obj3)

//copying only part of an array/object
let arr5 = [...arr1, {...obj1}, ...arr3, "X", "Y", "Z"]
console.log("Fifth array", arr5)

