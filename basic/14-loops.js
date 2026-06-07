// loops (alows you to repeat secuences)

// for loop 
for (let i = 0; i < 5; i++){
  console.log(`Hello ${i}`)
}; 
/*for creates the loop, i represent the numerical value; 
the condition for this to work; condition to change the condition 
*/
const numbers = [1, 2, 3, 4, 5]

for (let i = 0; i < numbers.length; i++){ // numbers.lenght tells how many times to run the code
  console.log(`Element: ${numbers[i]}`)
}; 

// while loop

let i = 0;
while (i < 5) {
    console.log(`Hello ${i}`) 
    i++ 
}

// while (true){ } // always run as it is always true 

// do while

i = 0
do {
  console.log(`Hello ${i}`) 
    i++
} while (i < 5)

// For of
let myArray= [1, 2, 3 ,4]
let mySet = new Set (["Nicolas", "Vallori", "Siryuus", "33"])
let myMap = new Map([
  ["name", "Nicolas"],
  ["surname", "Vallori"],
  ["username", "Siryuus"],
  ["age", 33]
])

let myString = "Hello, JavaScript"


for (let value of myArray){
  console.log(value)
}

for (let value of mySet){
  console.log(value)
}

for (let value of myMap){
  console.log(value)
}

for (let value of myString){
  console.log(value)
}

// good practics

// use break & continue
for (let i = 0; i < 10; i++){
  if (i == 5){
    continue
  } else if ( i == 7 ){
    break
  }
  console.log(`Hello ${i}`)
}; 
