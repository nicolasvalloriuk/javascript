// if/else/else if/ternary
// 1. Print your name to the console if a variable takes its value
let userNumber = 1234;
if (userNumber == 1234){
  console.log("Your user name is Nicolas")
} else{
  console.log("wrong user Number")
}

// 2. Print a message to the console if the username and password match predefined ones
let userName = true
let password = true

if (userName && password){
  console.log("Log in successful")
} else if (userName && !(password)){
  console.log("Incorrect password")
} else if (!(userName) && password){
  console.log("Incorrect Username")
} else {
  console.log("Try again")
}

// 3. Check whether a number is positive, negative, or zero and print a message
let number = 12

if (number < 0){
  console.log("is a negative number")
} else if (number==0){
  console.log("number is 0")
}else{
  console.log("number is positive")
}

// 4. Check whether a person can vote or not (18 or older) and indicate how many years they are missing

let age = 16

if (age >= 18){
  console.log("You can vote!")
} else{
  ageGap = (18 - age)  
  console.log(`You are ${age} years old, you will be able to vote in ${ageGap} years.`)
};

// 5. Use the ternary operator to assign the value "adult" or "minor" to a variable depending on the age

const adultCheck = age >= 18 ? "adult" : "minor" ;
console.log(adultCheck);

// 6. Display which season of the year we are in depending on the value of a variable "month"

let month = "September"

if (month == "December" || month == "January" || month == "February"){
  console.log("Winter")
} else if (month == "March" || month == "April" || month == "May"){
  console.log("Spring")
} else if (month == "June" || month == "July" || month == "August"){
  console.log("Summer")
} else if (month == "September" || month == "October" || month == "November"){
  console.log("Autumn")
} else {
  console.log("Wrong month name, try again!")
}

// 7. Display the number of days in a month depending on the variable from the previous exercise

if (month == "January"){
  console.log(`${month} have 31 days`)
} else if (month == "February"){
    console.log(`${month} have 28 days`)
} else if (month == "March"){
    console.log(`${month} have 31 days`)
} else if (month == "April"){
    console.log(`${month} have 30 days`)
} else if (month == "May"){
    console.log(`${month} have 31 days`)
} else if (month == "June"){
    console.log(`${month} have 30 days`)
} else if (month == "July"){
    console.log(`${month} have 31 days`)
} else if (month == "August"){
    console.log(`${month} have 31 days`)
} else if (month == "September"){
    console.log(`${month} have 30 days`)
} else if (month == "October"){
    console.log(`${month} have 31 days`)
} else if (month == "November"){
    console.log(`${month} have 30 days`)
} else if (month == "December"){
    console.log(`${month} have 31 days`)
} else {
  console.log("Wrong month name, try again!")
}

// switch
// 8. Use a switch to print a different greeting message depending on the language

let language = "Spanish"

switch (language){
  case "English":
    console.log("you have choosen English")
    break
  case "Spanish":
    console.log("You have choosen Spanish")
    break
  case "Portuguese":
    console.log("You have choosen Portuguese")
    break
  default:
    console.log("Wrong language, try again")
} 

// 9. Use a switch to redo exercise 6
// 6. Display which season of the year we are in depending on the value of a variable "month"

switch(month){
  case "December":
  case "January":
  case "February":
    console.log("Winter")
    break

  case "March":
  case "April":
  case "May":
    console.log("Spring")
    break 
  
  case "June":
  case "July": 
  case "August":
    console.log("Summer")
    break 
  
  case "September":
  case "October": 
  case "November":
    console.log("Autumn")
    break  
  
  default:
    console.log("Wrong month, a valid month")
}

// 10. Use a switch to redo exercise 7
// 7. Display the number of days in a month depending on the variable from the previous exercise

switch(month){
  case "February":
    console.log(`${month} have 28 days`)
    break
  
    case "April":
  case "June":
  case "September":
  case "November":
    console.log(`${month} have 30 days`)
    break
  
  case "January": 
  case "March":
  case "May": 
  case "July": 
  case "August": 
  case "October": 
  case "December":
    console.log(`${month} have 31 days`)
    break
  
  default:
    console.log("Wrong month, select a valid month")
}