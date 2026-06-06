// Arrays Structure

// Declaration

let myArray = [];
let myArray2 = new Array();

console.log(myArray);
console.log(myArray2);


myArray = [3]
myArray2 = new Array(3)

console.log(myArray);
console.log(myArray2);


myArray = [1, 2, 3, 4]
myArray2 = new Array(1, 2, 3, 4)

console.log(myArray);
console.log(myArray2);


myArray = ["Nick","Vallori","Siryuus", 33];
myArray2 = new Array("Nick","Vallori","Siryuus", 33);

console.log(myArray);
console.log(myArray2);

myArray2 = new Array(3);
myArray2[1] = "Vallori";
myArray2[2] = "Siryuus";

console.log(myArray2);

myArray = [ ]
myArray[1] = "Vallori";
myArray[2] = "Siryuus";

console.log(myArray);


// common methods

myArray = [];

// push and pop

// push add the new value as the last item
myArray.push("Nick")
myArray.push("Vallori")
myArray.push("Siryuus")
myArray.push(33)


console.log(myArray);

// pop removes the last item 
myArray.pop()
console.log(myArray);

// removes the last item and it shows it in the console
console.log(myArray.pop()) 
console.log(myArray);

// shift and unshift
// shift removes the first value (pop but first item instead of last)
myArray.shift()
console.log(myArray);

// unshift adds items to the list from the start of the list
myArray.unshift("Nick")
console.log(myArray);

// lenght (check the length of the list)
console.log(myArray.length);

// clear delete the Array

myArray = []
// myArray.length = 0
console.log(myArray);

// Slice selects the items ( , ) from to not including
myArray.push("Nick","Vallori","Siryuus", 33);

console.log(myArray);
let myNewArray = myArray.slice(0,1);
console.log(myNewArray);

// Splice deletes items in items ( , ) from to including
myArray.splice(1,3);
console.log(myArray);
