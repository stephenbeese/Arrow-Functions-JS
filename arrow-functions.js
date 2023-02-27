/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function

// Arrow Function With Parameters
// const addTwoNumbers = (a, b) => {
//     return a + b;
// }
// console.log(addTwoNumbers(3, 5));

// Single Line Arrow Function With Parameters
// const addTwoNumbers = (a,b) => a + b;

// console.log(addTwoNumbers(6, 4));

// // Implicit Returns

// // Returning Multiple Lines



// /**
//  * THE SPEAD OPERATOR
//  */

// //No spread operator
// let arr1 = [1, 2, 3];
// let arr2 = arr1;
// arr2.push(4);
// console.log("Second array:", arr2);
// console.log("First array:", arr1);

// // Copying an array
// arr3 = [4, 5, 6];
// let arr4 = [...arr3];
// arr4.push(7);
// console.log("Third array:", arr3);

// console.log("Fourth array:", arr4);

// // Copying an object
// let obj1 = {a: 1, b: 2, c: 3};
// let obj2 = {...obj1, d:4};
// let obj3 = {...obj2, b: 5};
// console.log("First object", obj1);
// console.log("Second object", obj2);
// console.log("Third object", obj3);

// //copying only part of an array/object
// let arr5 = [...arr1, {...obj1}, ...arr3, "X", "Y", "Z"];
// console.log("Fifth array", arr5);

/**
 * REST PARAMETER SYNTAX
 */

// Regular function call
const sumAll = (a, b, c) => a + b + c;

let sum = sumAll(1, 2, 3);
console.log("Sum:", sum);

// Extra arguments are ignored
let sum2 = sumAll(1, 2, 3, 4, 5, 6);
console.log("Sum2:", sum2);

// Function using ...rest
const sumRest = (a, b, c, ...rest) => {
    let sum = a + b + c;
    for (let i of rest) {
        sum += i;
    }
    return sum;
}

let sum3 = sumRest(1, 2, 3, 4, 5, 6);
console.log("Sum3:", sum3)


/**
 * Destructuring
 */

// NOT DESTRUCTURING
// let ages =[30, 26, 27];
// let john = ages[0]
// let mary = ages[1]
// let joe = ages[2]

//Destructuring arrays
let ages =[30, 26, 27];
let [john, mary, joe] = ages;
console.log(john, mary, joe)


//Destructuring objects

let jobs = {
    mike: "designer",
    jill: "developer",
    alicia: "accountant",
};

let { mike, jill, alicia } = jobs;
console.log(mike, jill, alicia);


//Destructuring subsets

let languages = ["english", "french", "spanish", "german", "japanese"];
let [johnNative, JohnSecondary] = languages;
console.log(johnNative, JohnSecondary);

let [, , maryNative, marySecondary] = languages;
console.log(maryNative, marySecondary);

let languages2 = {
    firstLanguage: "english",
    secondLanguage: "french",
    thirdLanguage: "spanish",
    fourthLanguage: "german",
    fifthLanguage: "japanese"
};

let { firstLanguage, thirdLanguage } = languages2;
console.log(firstLanguage, thirdLanguage);

// Using rest parameter syntax


let fruits = ["apple", "orange", "banana", "peach", "cherry"]
let [favourite, secondFavourite, ...others] = fruits;
console.log(favourite);
console.log(secondFavourite);
console.log(others);

let favouriteFoods = {
    brian: "pizza",
    anna: "pasta",
    sarah: "vegetarian",
    andrea: "steak",
};
let { brian, anna, ...rest } = favouriteFoods;
console.log(brian);
console.log(anna);
console.log(rest);


/**
 * map()
 */

// Using a for loop
let nums = [1, 2, 3, 4, 5];
console.log(nums)
let results = []

for (let num of nums) {
    results.push(num * 2);
}
console.log(results);

// Using map()
const multByTwo = function (num) {
    return num * 2;
}
const mapResults = nums.map(multByTwo);
console.log(mapResults);

// Simplified w/ map()

const simplified = nums.map(function (num) { return num * 2 });
console.log(simplified);

// Simplified w/ map + arrow function

const arrow = nums.map(num => num * 2);
console.log(arrow)

// with objects:

const students = [
    {
        id: 1,
        name: 'Mark',
        profession: 'Developer',
        skill: 'JavaScript'
    },
    {
        id: 2,
        name: 'Ariel',
        profession: 'Developer',
        skill: 'HTML'
    },
    {
        id: 3,
        name: 'Jason',
        profession: 'Designer',
        skill: 'CSS'
    },
];


const studentsWithIds = students.map(students => [students.name, students.id]);
console.log(studentsWithIds)

const studentsWithIdsDict = students.map(students => {return {name: students.name, id: students.id}});

console.log(studentsWithIdsDict)

const studentsWithIdsAge = students.map(students => [students.age = 30]);
console.log(studentsWithIdsAge);
console.log(students);
