// NOTE: Explore different function syntaxes to solve the exercises

// 1. Create a function that receives two numbers and returns their sum

function summ(a, b){
  console.log(a + b)
}
summ(5, 3)


// 2. Create a function that receives an array of numbers and returns the largest one

function getLargestNumb(arr){
  let max = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr [i] > max) {
      max = arr[i];
    }
  }
  return max;
}

const array1 = [1, 3, 5, 9, 7, 14];
const x = getLargestNumb(array1);
console.log(x) 

// 3. Create a function that receives a string and returns the number of vowels it contains

function numberVowels(str) {
  let count = 0;
  const vowels= "aeiou";

  for (let char of str.toLowerCase() ){
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

let myString = "My string to get the number of vowels";
console.log(numberVowels(myString));


// 4. Create a function that receives an array of strings and returns a new array with the strings in uppercase

function newArrayStrings(arrayString) {
  let newArray = [];
  for (let fruits of arrayString) {
    newArray.push(fruits.toUpperCase());
  }

  return newArray;
}

const arrayStrings = ["Lemons", "Apples", "Oranges", "Kiwis", "Bananas"]
console.log(newArrayStrings(arrayStrings));

// 5. Create a function that receives a number and returns true if it is prime, and false otherwise

function primeNumb(number) {
  // check before loop
  if (number < 2) return false;

  // loop to test the 
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false; // not prime
    }
  }
  return true; // prime
}

console.log(primeNumb(7))


// 6. Create a function that receives two arrays and returns a new array containing the elements common to both

function commonNumbers(array1, array2) {
  const result = []; // creation of a new array to store the common numbers

  for (let commonItems of array1) { // new for loop that checks if there are common numbers in the array one
    if (array2.includes(commonItems)){ // this checks if there is any items in common with the second array
    // if (array2.includes(commonItems) && !result.includes(commonItems)) { //replace to this code if you want to check that there are not common numbers in the arrays (avoid duplicates)

      result.push(commonItems); // this add the items to the result array
    }
  }
  return result; // returns the solution
}

console.log(commonNumbers([1, 3, 5, 7, 9, 11, 13, 15],[2, 6, 7, 9, 13, 4])); // add 2 arrrays to be checked, and get a new array with the common numbers

// 7. Create a function that receives an array of numbers and returns the sum of all even numbers



// 8. Create a function that receives an array of numbers and returns a new array with each number squared


// 9. Create a function that receives a text string and returns the same string with the words in reverse order


// 10. Create a function that calculates the factorial of a given number

