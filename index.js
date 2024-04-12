// first value -> the principal amount
// second value -> the rate of interest
// third value -> the time in years
// let values = [10000, 6.5, 10];

// let principal = values[0];
// let rate = values[1];
// let time = values[2];

// let simpleInterest = (principal * rate * time) / 100;

// console.log(`The simple interest is ${simpleInterest}`);
// console.log(`The total amount is ${principal + simpleInterest}`);

// using destructuring

// let [principal, rate, time] = [10000, 6.5, 10];

// let simpleInterest = (principal * rate * time) / 100;

// console.log(`The simple interest is ${simpleInterest}`);
// console.log(`The total amount is ${principal + simpleInterest}`);

// without using destructuring
// let values = {
//     principal: 10000,
//     rate: 6.5,
//     time: 10
// };

// let principal = values.principal;
// let rate = values.rate;
// let time = values.time;

// let simpleInterest = (principal * rate * time) / 100;

// console.log(`The simple interest is ${simpleInterest}`);
// console.log(`The total amount is ${principal + simpleInterest}`);

// using destructuring
// let values = {
//     principal: 10000,
//     rate: 6.5,
//     time: 10
// };

// let { principal, rate, time } = values;

// let simpleInterest = (principal * rate * time) / 100;

// console.log(`The simple interest is ${simpleInterest}`);
// console.log(`The total amount is ${principal + simpleInterest}`);

// let values = {
//     principal: 10000,
//     rate: 6.5,
//     time: 10
// };

// let { principal, rate, time: years } = values;

// let simpleInterest = (principal * rate * years) / 100;

// console.log(`The simple interest is ${simpleInterest}`);
// console.log(`The total amount is ${principal + simpleInterest}`);

let values = {
    principal: 10000,
    rate: 6.5,
    time: 10
};

let { principal, rate, time: years } = { ...values };

let simpleInterest = (principal * rate * years) / 100;

console.log(`The simple interest is ${simpleInterest}`);
console.log(`The total amount is ${principal + simpleInterest}`);