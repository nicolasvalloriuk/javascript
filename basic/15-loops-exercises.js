// NOTE: Explore different loop syntaxes to solve the exercises

// 1. Create a loop that prints the numbers from 1 to 20

for (let numbers = 1; numbers <= 20; numbers++){
  console.log(numbers)
}

// 2. Create a loop that adds all numbers from 1 to 100 and displays the result
let sum = 0
for (let numbers = 1; numbers <= 100; numbers++){
  sum += numbers
  // console.log(sum) if you want to see all the progress add the log inside the loop
}
console.log(sum) // if you only want to see the result

// 3. Create a loop that prints all even numbers between 1 and 50

let number = 1
for (number = 2; number <=50; number += 2){
  console.log(number)
}
/* This is another way to do it
let number = 1
for (number = 2; number <=50; number += 2){
  if (number % 2 !== 0){  this means the if number multiplied by 2 equals 0
  continue
  }
  console.log(number)
}
*/

// 4. Given an array of names, use a loop to print each name to the console

let thisArray = ["Nick","Leo","Kat","Louis", "Sion"]

for (let name of thisArray){
  console.log(name)
}

// 5. Write a loop that counts the number of vowels in a text string

let myText = "My name is Nicolas"
let vowels = 0

for (let char of myText.toLowerCase()){
  if("aeiou".includes(char)){
    vowels++
  }
}
console.log(vowels)

// 6. Given an array of numbers, use a loop to multiply all the numbers and display the product

let numberOfArray = [1, 2, 3, 4, 5, 6, 7]
let total = 1

for (let number of numberOfArray){
  total *= number
}
console.log(total)

// 7. Write a loop that prints the multiplication table of 5

let tableArray = [1,2,3,4,5,6,7,8,9,10]
let multiplicationNumb = 5

for (let number of tableArray) {
  console.log(`${multiplicationNumb} x ${number} = ${multiplicationNumb * number}`)
}

// 8. Use a loop to reverse a text string

let myTextReverse = "Lemons are sour but can be sweet"
let reversed = ""
for (let char of myTextReverse){
  reversed = char + reversed
}
console.log(reversed)

// 9. Use a loop to generate the first 10 numbers of the Fibonacci sequence
/*
let a = 0 // current number
let b = 1 // next number
let count = 1 // 

while (count <= 10){
  console.log(a)
  let next = a + b // sum of both 
  a = b
  b = next
  count++
}
*/
// in this case a for loop is a better option than a while loop
let a = 0
let b = 1

for (let i = 1; i <= 10; i++){
  console.log(a)
  let next = a + b
  a = b
  b = next
}

// 10. Given an array of numbers, use a loop to create a new array containing only the numbers greater than 10

let arrayOfNumbers = [1, 2, 3, 5, 8, 13, 21, 34, 55]
let newArray = []

for (let number of arrayOfNumbers){
  if (number > 10) {
    newArray.push(number)
  }
}

console.log(newArray)