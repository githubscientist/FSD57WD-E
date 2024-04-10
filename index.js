// Scoping - var vs let vs const

// reference -> as a variable or as a constant
// we can create a variable using either var or let keyword
// var age = 25;

// // variable are changeables
// age = 30;

// console.log(age);

// using let -> we can create a variable which are changeables. i., we can change the value
// let age = 25;

// // variable are changeables
// age = 30;

// console.log(age);

// const -> create constants whose values aren't changed once defined
// const age = 25;

// // variable are changeables
// age = 30; // can't change the value of a constant once defined

// console.log(age);

// differences between var vs let

/*
    var -> function-scoped. introduced in ES5 - redefinitions are allowed
    let -> block-scoped. introduced in ES6  - redefinitions are allowed
    const -> block-scoped. introduced in ES6 - redefinitions are not allowed
*/

// 1. Redeclarations and Redefinitions

// var age = 25; // declare and define a variable

// var age = 'twenty five'; // redeclaration and redefinition

// console.log(age);

// var age = 25; // declare and define a variable

// let age = 'twenty five'; // redeclaration is not allowed

// console.log(age);

// 2. Scoping: Scoping is the way to define the visibility of variables in different parts of the code

// global scope: visible everywhere in the file
// var x = 10; // global scope: visible everywhere in the file

// // a block of code
// {   
//     console.log(x); // 10
// }

// // block scope: visible only within the block
// var x = 10; // global scope: visible everywhere in the file

// // a block of code
// {   
//     var x = 20; // redefinition
//     console.log(x); // 20
// }

// // block scope: visible only within the block
// var x = 10; // global scope: visible everywhere in the file

// // a block of code
// {   
//     x = 20; // redefinition
//     console.log(x); // 20
// }

// console.log(x); // 20

// let x = 10; // global scope: visible everywhere in the file

// // let x = 20; // redeclaration is not allowed

// {
//     let x = 20; // block scope: visible only within the block
//     console.log(x); // 20
// }

// console.log(x); // 10

// Scoping: if statement, for loops, functions

// let x = 10; 

// if (true) {
//     let x = 20; // block scope: visible only within the block
//     console.log(x); // 20
// }

// console.log(x); // 10

// for (let i = 1; i <= 5; i++); // block scope: visible only within the block
// console.log(i); // ReferenceError: i is not defined

// for (var i = 1; i <= 5; i++); // block scope: visible only within the block
// console.log(i); // 6

// function sayHello() {
//     var x = 10; // function scope: visible only within the function
//     console.log(x); // 10
// }

// sayHello();

// console.log(x); // ReferenceError: x is not defined

var x = 10; // global scope: visible everywhere in the file

function sayHello() {
    console.log(x); // 10
}

sayHello();

console.log(x); // 10