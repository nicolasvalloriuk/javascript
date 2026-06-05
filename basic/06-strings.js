// Strings

// concatenation of strings
let myName = "Juan";
let greeting = "Hello, " + myName + "!"; // Concatenation
console.log(greeting); // Output: Hello, Juan!
console.log(typeof greeting); // Output: string

// length of a string
console.log(greeting.length); // Output: 12

// accessing characters in a string
console.log(greeting[0]); // Output: H
console.log(greeting[1]); // Output: e
console.log(greeting[14]); // Output: undefined (out of bounds)


// common string methods
console.log(greeting.toUpperCase()); // Output: HELLO, JUAN!
console.log(greeting.toLowerCase()); // Output: hello, juan!
console.log(greeting.indexOf("Juan")); // Output: 7
console.log(greeting.includes("Hello")); // Output: true
console.log(greeting.slice(0, 8)); // Output: Hello
console.log(greeting.replace("Juan", "Nicolas")); // Output: Hello, Nicolas!


// templates literals (template strings)

let message = `Hello, ${myName}! 
Welcome to JavaScript.`; // this is a text in multiple lines.

console.log(message); // Output: Hello, Juan! Welcome to JavaScript.

let email = "aaa@example.com";

console.log (`Hello, ${myName}! 
your email address is: ${email}`); // Output: Hello, Juan! 
// your email address is: aaa@example.com
