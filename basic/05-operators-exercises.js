// 1. Create a variable for each type of arithmetic operation, using any numbers you like

let sum = 5 + 3; // addition
let difference = 10 - 4; // subtraction
let product = 6 * 7; // multiplication
let quotient = 20 / 5; // division
let modulus = 10 % 3; // modulus (remainder)
let exponentiation = 2 ** 3; // exponentiation (2 raised to the power of 3)

// 2. Create a variable for each type of assignment operation, 
//  using the variables from the arithmetic operations 
let a = 5;
let increment = a++; 
let substraction = a--;

// 3. Print 5 true comparisons with different comparison operators
console.log(7>3); // true (greater than)
console.log(5<10); // true (less than)
console.log(10>=8); // true (greater than or equal to)

// 4. Print 5 false comparisons with different comparison operators
console.log(3>7); // false (greater than)
console.log(10<5); // false (less than)
console.log(8>=10); // false (greater than or equal to)

// 5. Use the logical operator and
console.log(true && 7 > 3); // true (both conditions are true)
console.log(7 > 3 && 5 < 10); // true (both conditions are true)
console.log(7 > 3 && 5 > 10); // false (one condition is false)

// 6. Use the logical operator or
console.log(true || 7 > 3); // true (both conditions are true, but we only need one to be true)
console.log(true || false); // true (at least one condition is true)
console.log(7 > 3 || 5 > 10); // true (at least one condition is true)

// 7. Combine both logical operators

console.log(7 > 3 && false || 5 < 10); // true (first condition is true, second condition is false, but third condition is true)
console.log((4 == 4 && 5 > 3) || (10 < 5)); // true (first condition is true, second condition is false, but we only need one to be true)

// 8. Add some negation
console.log(!(true)); // false (negation of true)
console.log(!(false)); // true (negation of false)

// 9. Use the ternary operator
let windowsIsOpen = true;
windowsIsOpen ? console.log("The windows are open") 
: console.log("The windows are closed"); // The windows are open

// 10. Combine arithmetic, comparison, and logical operators

console.log((3*2 == 6) && (6 / 2 == 3)); // true (both conditions are true)
console.log((3*2 == 5) || (6 / 2 == 3)); // true (first condition is false, but second condition is true)
