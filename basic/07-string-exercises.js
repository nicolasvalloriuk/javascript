// 1. concatenates two strings of text
let firstName = "John";
let lastName = "Doe";
let message = `Hello, ${firstName} ${lastName}!`; // Using template literals for concatenation
console.log(message); // Output: Hello, John Doe!

// 2. show the length of a string and the type of a variable that contains a string
console.log(message.length); // Output: 17
console.log(typeof message); // Output: string

// 3. show the first character aand the last character of a string
console.log(message[0]); // Output: H
console.log(message[message.length - 1]); // Output: !

// 4. Convert a string to uppercase and lowercase
console.log(message.toUpperCase()); // Output: HELLO, JOHN DOE!
console.log(message.toLowerCase()); // Output: hello, john doe! 

// 5. Create a multi-line string
let multiLineMessage = `This is a multi-line string.
It can span multiple lines without needing special characters.`;
console.log(multiLineMessage);


// 6. Interpolate the value of a variable in a string
let age = 30;
let interpolatedMessage = `I am ${age} years old.`;
console.log(interpolatedMessage); // Output: I am 30 years old.


// 7. Replace all whitespace in a string with hyphens
let stringWithWhitespace = "  Hello, World!  ";
let replacedMessage = stringWithWhitespace.replace(/\s/g, "-");
console.log(replacedMessage); // Output: --Hello,-World!--


// 8. Check if a string contains a specific word
let sentence = "The quick brown fox jumps over the lazy dog.";
console.log(sentence.includes("fox")); // Output: true

// 9. Check if two strings are equal
let string1 = "Hello, World!";
let string2 = "Hello, World!";
console.log(string1 === string2); // Output: true

// 10. Check if two strings have the same length
console.log(string1.length === string2.length); // Output: true

