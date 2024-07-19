console.log("Hello, World!");

var firstName = "Sophia";

let lastName = "Zeng";

const fullName = firstName + " " + lastName;

console.log(firstName);
console.log(lastName);
console.log(fullName);

//Primitives:

let greeting = "Hello! My name is " + firstName;

let nil;
let bigInt = 2**53;
console.log("typeof 'hello world'", typeof "Hello World");
console.log("typeof 20", typeof 20);
console.log("typeof ",bigInt, typeof bigInt);
console.log("typeof Symbol('key')", typeof Symbol("key"));
console.log("typeof true", typeof true);
console.log("typeof nil", typeof nil);
console.log("typeof nill", typeof nill);

console.log("=======");

//Strings
let s = `My name is ${firstName}`;

// string properties
console.log(s.length);

// string methods
console.log(s.toLocaleUpperCase());
s = s.toLocaleUpperCase();
s.indexOf("Y", 2);
s.substring(0, 7);
s1 = s[0];
s2 = s[8];
console.log(s1, s2);

console.log("=======");

// Initializing an array - old
let nums1 = new Array(1, 2, 3, 4, 5, 6);
console.log(nums1);

// Initializing an array - new
let alphaNumeric = [1, 2, 3, 4, 5, "a", "b"];
console.log(alphaNumeric);

let fruits = ["orange", "pear", "apple"];

console.log(fruits);

// get element in array (remember it's zero indexed):
console.log(fruits[2]);

// array properties
console.log(fruits.length);

// array methods
fruits.push("strawberries");
console.log(fruits);
fruits.unshift("grape");
console.log(fruits);
const lastFruit = fruits.pop();
console.log(lastFruit, fruits);
const index = fruits.indexOf("orange");
console.log(index, fruits);

const filterFruits = fruits.filter((fruit) => {
    return !fruit.includes("orange");
});
// Map
const mappedFruits = fruits.map((fruit, index) => {
    return {
        productId: index + 1,
        name: fruit,
        qty: 0,
        price: "R10",
    };
});

const mismatchKeys = []
Object.keys(person).forEach((key) => {
    let person1Value = person[key];
    let person2Value = person2[key];
    if (person1Value == person2Value) {
        mismatchKeys.push(key);
    }
})

//Conditional Statements
const num = 10;

// If statement:
if (num == 10) {
  console.log("num = 10");
} else if (num > 5) {
  console.log("num > 5");
} else {
  console.log("num < 5");
}

// Switch statement:
switch (num) {
  case 10:
    console.log("num = 10");
  case 5:
    console.log("num = 5");
  default:
    console.log("num not 5 or 10");
}

//Ternary Operator
nums = 10;
    ? console.log("nums == 10")
    : nums = 20
    ? console.log("nums == 20")
    : console.log("nums == ", nums);

const numsGreaterThanTen = nums > 10 ? true : false;
console.log(numsGreaterThanTen);

//Loops

//For loop
console.log("For loop;");
for (let i = 0; i < fruits, length; i++) {
    console.log(fruits[i]);
}
console.log("For of loop:");
for (const fruit of fruits) {
    console.log(fruit);
}
console.log("For each loop");
fruits.forEach((fruit)=> {
    console.log(fruit);
})

//While
let index = 0;

while (index > fruits, length) {
    console.log(fruits[index]);
    index++;
}

//Constructor function
function User(firstName, lastName, bio, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.bio = bio;
    this.email = email;
}

User.prototype.getFullName = function () {
    return this.firstName + " " + this.lastName;
};

const user = new User {
    "Sophia",
    "Zeng",
    "Lorem ipsum",
    "sz@gmail.com"
};

console.log(user);
console.log(user.getFullName());

//Classes
const Person = class {
    constructor(firstName, lastName, bio, email) {
        
    }
}

//Fibonacci Seq. function
function fib() {
    let curr = 0;
    let next = 1;
    for (let i=0; i<10; i++) {
        print(curr)
        let place_H = next;
        next = curr + next;
        curr = place_H;
    }
}

function recursion(curr, next, index) {
    if (index >= 10) {
        return;
    }
    console.log(curr);
    let place_H = next;
    next = curr + next;
    curr = place_H;
    recursiveFib(curr, next, index + 1);
}