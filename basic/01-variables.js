// Variables - creation of variables

// var - variable creation outdated, used on older versions of JavaScript and special cases.
var helloWorld = "Hello World!"; // Do not use var to create a variable. Outdated
console.log(helloWorld);


// let - variable creation, can be reassigned, but not redeclared.
let helloWorld2 = "Hello World!"; // Use let to create a variable that can be reassigned. this only can be used within the scope it was created in.
console.log(helloWorld2);


// const - variable creation, cannot be reassigned or redeclared.
const helloWorld3 = "Hello World!"; // Use const to create a variable that cannot be reassigned. this only can be used within the scope it was created in.
// the reference can't be changed but the value can be changed if it's an object or array.
console.log(helloWorld3);
