// functions (bloques of code to do something)


// simple
function myFunction() {
  console.log("Hello, function!")
}
myFunction() // call function
/*
// example of calling a function inside a for loop
for (let i = 0; i <5; i++) {
  myFunction()
}
*/


// with params
function myFunctionWithParams (name) {
  console.log(`Hello, ${name}!`)
}
myFunctionWithParams("Nicolas")


// Anonym function

const myFunction2 = function(name){
  console.log(`Hello, ${name}!`)
}

myFunction2("Nick")


// Arrow functions (simple version/ reduced version)

const myFunction3 = (name) => {
  console.log(`Hello, ${name}!`)
}


// const myFunction3 = (name) => console.log(`Hello, ${name}!`)

myFunction3("Nico")


// parametres 

function sum(a, b){
  console.log(a + b)
}
sum(5, 10)


// in this example we set a = 0 and b = 0, so in case of wrong input you will get a result instead of NaN (not a number)
function defaultSum(a = 0, b = 0){
  console.log(a + b)
}
defaultSum(5, 10)


// value return
function mult(a, b){
  return a * b
}
let result = mult(10, 5)
console.log(result)

// nested functions
function extern(){
  console.log("External function")
  function intern() {
    console.log("Internal Function")
  }
  intern()
}
extern()


// intern() Error : Out of scope 

// higher order functions 
/*
function applyFunc(func){

}
applyFunc(myFunction3("High order"))
*/

function applyFunc(func, param){
  func(param)
}

applyFunc(myFunction3, "High order")


// for each function (loop function)

myArray = [1, 2, 3, 4] 

myArray.forEach((value)=> console.log(value))

mySet = new Set (["Nicolas", "Vallori", "Siryuus", "33"])
myMap = new Map([
  ["name", "Nicolas"],
  ["surname", "Vallori"],
  ["username", "Siryuus"],
  ["age", 33]
])

mySet.forEach((value)=> console.log(value))
myMap.forEach((key, value)=> console.log(key, value))
