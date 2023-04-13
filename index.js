let name = 'North'; // string literal
console.log(name);

// Camel notation
// Case-sensitive
// dynamic language

let firstName = 'North';
let lastName = 'Hess';

const interestRate = 0.3; // number literal
// interestRate = 1;
console.log(interestRate)

let isApproved = false; // boolean literal
let isUndefined = undefined;
let isNull = null;

// object, similar to dict?
let person = {
    name: 'North',
    age: 22
};
// dot notation
person.name = 'Not North'
// bracket notation
person['name'] = 'Also not North';
console.log(person);

// array, indexed
let selectedColors = ['red', 'blue'];
console.log(selectedColors);


// functions
function greet(name) {
    // function body defines logic
    console.log('Hello ' + name);
}

greet(firstName);

function square(number) {
    return number * number;
}

let number = square(2);
console.log(number);
console.log(square(2));