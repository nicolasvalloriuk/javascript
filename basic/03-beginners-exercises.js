// 1 Write a JS one line comment

// This is a one line comment created by Juan Nicolas

// 2 Write a JS multi line comment

/* This is a multi-line comment
created by Juan Nicolas */

// 3 Create a variables with all primitives data types and check their data types

// String
let stringVar = "This is a string variable";

// Number
let numberVar = 60;

// Boolean
let iAmStudent = true;

// Undefined
let undefinedVar;

// Null
let nullVar = null;

// Symbol
let mySymbol = Symbol("mySymbol");

// BigInt
let bigInteger = BigInt(1234567890123456789876543210);

// 4 Print in the console the value of the variables
console.log(stringVar);
console.log(numberVar);
console.log(iAmStudent);
console.log(undefinedVar);
console.log(nullVar);
console.log(mySymbol);
console.log(bigInteger);

// 5 Print in the console the data type of the variables
console.log(typeof stringVar);
console.log(typeof numberVar);
console.log(typeof iAmStudent);
console.log(typeof undefinedVar);
console.log(typeof nullVar);
console.log(typeof mySymbol);
console.log(typeof bigInteger);

// 6 modify the values stored on the variables with the same data type but different value

stringVar = "This is a new string variable";
numberVar = 100;
iAmStudent = false;
undefinedVar = "Now this variable has a value";
nullVar = "Now this variable has a value too";
mySymbol = Symbol("myNewSymbol");
bigInterger = BigInt(9876543210987654321098765432109876543210); // new big integer number

// 7 modify the values store on the variables with a different data type
stringVar = 123; // This is a number now
numberVar = "This is a string now"; 
iAmStudent = "This is a string now"; 
undefinedVar = null;  // This variable is now null
nullVar = undefined; // This variable is now undefined
mySymbol = "This is a string now"; // This variable is now a string
bigInteger = "This is a string now"; // This variable is now a string

// 8 Create constant variables with primitive data types
const constString = "This is a constant string variable";
const constNumber = 12345;
const constBoolean = false;
const constUndefined = undefined;
const constNull = null;
const constSymbol = Symbol("constSymbol");
const constBigInt = BigInt(1234567890123456789012345678901234567890);

// 9 try to modify the value of the constant variables
constString = "Trying to modify a constant variable"; // This will produce an error because const variables cannot be reassigned.
constNumber = 54321; // This will produce an error because const variables cannot be reassigned.
constBoolean = true; // This will produce an error because const variables cannot be reassigned.
constUndefined = "Trying to modify a constant variable"; // This will produce an error because const variables cannot be reassigned.
constNull = "Trying to modify a constant variable"; // This will produce an error because const variables cannot be reassigned.
constSymbol = Symbol("newConstSymbol"); // This will produce an error because const variables cannot be reassigned.
constBigInt = BigInt(9876543210987654321098765432109876543210); // This will produce an error because const variables cannot be reassigned.

// 10 comment the lines of code that produce an error and explain why

/* 
All the lines of code trying to modify a constant variable will produce an error, because there are declared as constant (which means that the value cannot be changed after assigned).
*/