// functions: block of code that gets executed when called
// function types: library functions and user defined functions

// function definition withuot any arguments and without return type
// function sayHello() {
//     console.log("Hello");
// }

// sayHello(); // function call
// sayHello();

// passing value as argument
// function sayHello(name) {
//     console.log("Hello", name);
// }

// // sayHello("Krish");
// sayHello("Sathish");

// the function with multiple arguments
// function add(x, y) {
//     return x + y;
// }

// console.log(add(5, 6));

/*
    1. named functions
    2. anonymous functions
    3. arrow functions
    4. IIFE (Immediately Invoked Function Expression)
*/

// named functions
// function add(x, y) {
//     return x + y;
// }

// console.log(add(5, 6));

// anonymous functions
// let add = function (x, y) {
//     return x + y;
// }

// console.log(add(5, 6));

// arrow functions
// let add = (x, y) => {
//     return x + y;
// }

// console.log(add(5, 6));

// let add = (x, y) => x + y;

// console.log(add(5, 6));

// IIFE: Immediately Invoked Function Expression
// console.log(((x, y) => {
//     return x + y;
// })(5, 6));

// ((x, y) => {
//     console.log(x + y);
// })(5, 6)

// console.log((function (x, y) {
//     return x + y;
// })(5, 6));

// (function (x, y) {
//     console.log(x + y);
// })(5, 6)

let sum = (function (x, y) {
    return x + y;
})(5, 6);

console.log(sum);