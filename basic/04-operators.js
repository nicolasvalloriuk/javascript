// operators (create operations with values)

// arithmetic operators

let a = 5;
let b =10;

console.log(a + b); // addition
console.log(a - b); // subtraction
console.log(a * b); // multiplication
console.log(a / b); // division

console.log(a % b); // modulus (remainder)
console.log(a ** b); // exponentiation (2 raised to the power of 3)

// assignment operators
a++; // increment (a = a + 1)
console.log(a)

b--; // decrement (b = b - 1)
console.log(b)

// assignment with arithmetic operators
let myVariable = 2;
myVariable += 5; // addition assignment (x = x + 5)
console.log(myVariable)
myVariable -= 3; // subtraction assignment (x = x - 3)
console.log(myVariable)
myVariable *= 2; // multiplication assignment (x = x * 2)
console.log(myVariable)
myVariable /= 4; // division assignment (x = x / 4)
console.log(myVariable)
myVariable %= 3; // modulus assignment (x = x % 3)
console.log(myVariable)
myVariable **= 2; // exponentiation assignment (x = x ** 2)
console.log(myVariable)



// comparison operators we can compare values and return a boolean result
// basic comparison operators
console.log(a > b); // greater than
console.log(a < b); // less than
console.log(a >= b); // greater than or equal to
console.log(a <= b); // less than or equal to
// other operators
console.log(a == b); 
console.log(a == 6); // Equal value
console.log(a == "6"); // Equal value

console.log(a === 6); // Strict equality (value and type)
console.log(a === "6"); // Strict equality (value and type) - false because different data types

console.log(5 != 6); // inequality (loose)
console.log(5 !== "6"); // strict inequality (value and type)

// other comparison operators
console.log(0 == false); // true (loose equality)
console.log(1 == false); // false (strict equality)
console.log(2 == false); // false (strict equality)

console.log(0 == "");
console.log(0 == " ");
console.log(0 == '');
console.log(0 == "Hello");
console.log(0 === ""); // false (strict equality)
console.log(undefined == null); // true (loose equality)
console.log(undefined === null); // false (strict equality)

// Truthy values (true values)
/*
All positive numbers except 0
All strings (except empty string)
All boolean true
*/

// Falsy values (false values)
/*
0
0n
null
undefined
NaN
boolean false
empty string ("")
*/

// Logical operators (combine boolean values and return a boolean result)
// and && both conditions must be true for the result to be true
console.log(true && true); // true
console.log(5 > 10 && 15 > 20); 
console.log(5 < 10 && 15 < 20); 
console.log(5 < 10 && 15 > 20); 
console.log(5 > 10 && 15 > 20 && 30 > 40);

// or || at least one condition must be true for the result to be true
console.log(true || false); // true
console.log(5 > 10 || 15 > 20);  // false or false = false
console.log(5 < 10 || 15 < 20);  // true or true = true
console.log(5 < 10 || 15 > 20);  // true or false = true
console.log(5 > 10 || 15 > 20 || 30 > 40); // false or false or false = false

console.log(5 > 10 && 15 > 20 || 30 < 40); // false and false or true = true

// not !
console.log(!true); // false
console.log(!false); // true
console.log(!(5 > 10 && 15 > 20));
console.log(!(5 > 10 || 15 > 20));


// Ternary operator (condition ? expressionIfTrue : expressionIfFalse)
const isRaining = true;
isRaining ? console.log("It is raining") : console.log("It is not raining");
// ? if true do this
// : else do this
