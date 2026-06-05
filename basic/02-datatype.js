// There are 7 types of primitive data type in JavaScript
// 1 String - a sequence of characters, used to represent text.
let name = "Juan Nicolas"; // String data type
let email = "aaa@gmail.com"; // String data type

// 2 Number - a numeric data type, used to represent numbers.
let age = 30; // Number data type integer
let height = 1.75; // Number data type float


// 3 Boolean - a logical data type that can only have two values: true or false.
let isStudent = true; // Boolean data type
let isTeacher = false; // Boolean data type


// 4 Undefined - a primitive data type that represents the absence of a value or an uninitialized variable.
let undefinedValue; // Undefined data type


// 5 Null - a data type that represents the absence of a value.
let nullValue = null; // Null data type - intentionally set to no value, different from undefined which is uninitialized.


// 6 Symbol - a data type that represents a unique identifier.
let mySymbol = Symbol("id"); // Symbol data type
// this are unique values, use to create unique identifiers for object properties, to avoid name collisions.


// 7 BigInt - a data type that represents integers with arbitrary precision.
let bigIntValue = BigInt(1234567890123456789012345678901234567890); // BigInt data type
// We used this to represent integers larger than the maximum safe integer in JavaScript (2^53 - 1), which is 9007199254740991.
// BigInt can be used for precise calculations with large integers, such as in cryptography or when working with large datasets.
// You can also create BigInt values by appending 'n' to the end of an integer literal, or by using the BigInt() constructor.
let bigIntValue2 = 1234567890123456789012345678901234567890n; // BigInt data type

//check data typea of variables using typeof operator
// 1 String
console.log(typeof name); // Output: string
console.log(typeof email); // Output: string
// 2 Number
console.log(typeof age); // Output: number
console.log(typeof height); // Output: number
// 3 Boolean
console.log(typeof isStudent); // Output: boolean
console.log(typeof isTeacher); // Output: boolean
// 4 Undefined
console.log(typeof undefinedValue); // Output: undefined
// 5 Null
console.log(typeof nullValue); // Output: object (this is a known quirk in JavaScript, null is considered an object)
// 6 Symbol
console.log(typeof mySymbol); // Output: symbol
// 7 BigInt
console.log(typeof bigIntValue); // Output: bigint
console.log(typeof bigIntValue2); // Output: bigint
