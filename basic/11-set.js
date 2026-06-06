// Sets Structure
// Set you can't access though index

// Declaration

let mySet = new Set();

// Initiation

mySet = new Set(["Nick","Vallori","Siryuus", 33, true, "nick@gmail.com"]);

console.log(mySet)

// Common methods

// add & delete

mySet.add("http:\\Siryuusphotography.com") // adds at the end of the set
console.log(mySet)

mySet.delete("http:\\Siryuusphotography.com") // you have to specify the exact content
console.log(mySet)

console.log(mySet.delete(true)) // will return true if it match the content or false if it doens't
console.log(mySet)

// has

console.log(mySet.has("Nick")) // returns true if the set has and false if it doesn't

// size

console.log(mySet.size)

// convert set to array

let myArray = Array.from(mySet);
console.log(myArray)

// convert array to set
mySet = new Set(myArray)
console.log(mySet)

// 

mySet.add("Nick") // as it already exist it can't be added again in a set
mySet.add("Nick") // items are uniques only once per item
mySet.add("nick") // This will be added as the content isn't exact
console.log(mySet)
