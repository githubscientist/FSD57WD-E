// property shorthand

let name = 'DSA';
let author = 'Sathish';
let noOfPages = 346;
let price = 653.23;
let inStock = 20;

let book1 = {
    name: name,
    author: author,
    noOfPages: noOfPages,
    price: price,
    inStock: inStock
}

// property shorthand
let book2 = {
    name,
    author,
    noOfPages,
    price,
    inStock
}

console.log(book1);
console.log(book2);