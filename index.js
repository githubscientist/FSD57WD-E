// spread & rest prarameter
// ...

// let numbers = [3, 4, 5, 6, 7];

// console.log(...numbers);
// console.log(3, 4, 5, 6, 7);

// where we use this operator?
// let numbers = [3, 4, 5, 6, 7];

// console.log(...numbers);
// console.log(3, 4, 5, 6, 7);

// shallow copy vs deep copy

// deep copy
// let x = 10;
// let y = x;

// x = 20;
// y = 30;

// console.log(`value of x: ${x}, value of y: ${y}`);

// shallow copy
// let nums1 = [3, 4, 5, 6, 7];
// let nums2 = nums1;

// nums1[0] = 10;

// console.log(`nums1: ${nums1}`);
// console.log(`nums2: ${nums2}`);

// this is called shallow copy where we are copying the reference of nums1 to nums2, so when we change the value of nums1, nums2 is also affected by this change.

// question: how do we keep separate copies of the array?
// how do we create a deep copy of the array?

// let nums1 = [3, 4, 5, 6, 7];
// let nums2 = [...nums1];

// nums1[0] = 10;
// nums2[1] = 20;

// console.log(`nums1: ${nums1}`);
// console.log(`nums2: ${nums2}`);

// arrays: is used to store multiple values in a single variable.

// let nums1 = [3, 4, 5, 6, 7];
// let nums2 = [8, 9, 10, 11, 12];

// let mergedArray = [...nums2, ...nums1];

// console.log(mergedArray);

// with javascript objects -> spread operator

// let book1 = {
//     title: 'Book 1',
//     author: 'Author 1'
// };

// console.log({...book1});

// let book1 = {
//     title: 'dsa',
//     author: 'sathish'
// }

// let book2 = book1;

// book1.title = 'oops';

// console.log(book1);
// console.log(book2);

// let book1 = {
//     title: 'dsa',
//     author: 'sathish'
// }

// let book2 = {...book1};

// book1.title = 'oops';

// console.log(book1);
// console.log(book2);

// rest parameter

// function add(...args) {
//     let sum = 0;

//     for (let value of args) {
//         sum += value;
//     }

//     console.log(sum);
// }

// add(); // 0
// add(10); // 10
// add(10, 20); // 30
// add(10, 20, 30); // 60
add(10, 20, 30, 40); // 60
// add(10, 20, 30, 40, 50, 60, 70); // 60