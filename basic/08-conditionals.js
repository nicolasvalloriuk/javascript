// conditionals (there are 3 types of conditionals in JavaScript)
// if, else if, else 

// if (condition is true do this)

let age = 18;

if (age >= 18) {
    console.log("You are an adult."); 
}

// else (if condition is false do this)

let time = 20;
if (time < 12) {
    console.log("Good morning!");
}
else {
    console.log("Good afternoon!");
};

// else if (if condition is false, and we want to have more options)

let myAge = 17;
if (myAge < 18 ){
  console.log("your are under 18 years old")
}else if (age == 18){
  console.log("your are 18 years old")
}else{
  console.log("your are more than 18 years old")
}

// Operator Ternary (reduced)

const message = myAge < 18 ? "your are under 18 years old" : "your are 18 years old or more";
console.log(message);

// switch

let day = 0
let dayName
// this is the difficult way to do switch
if (day == 0){
  dayName = "Monday"
} else if (day == 1){
  dayName = "Tuesday"
} else if (day == 2){
  dayname = "Wednesday"
} else if (day == 3){
  dayName = "Thursday"
} else if (day == 4){
  dayName = "Friday"
} else if (day == 5){
  dayName = "Saturday"
} else{
  dayName = "Sunday"
}


// switch
switch (day) {
  case 0: // condition
    dayName = "Monday"
    break // you must add break to stop this conditional to keep running if the condition has meet
  case 1: // condition
    dayName = "Tuesday"
    break
  case 2: // condition
    dayName = "Wednesday"
    break
  case 3: // condition
    dayName = "Thursday"
    break
  case 4: // condition
    dayName = "Friday"
    break
  case 5: // condition
    dayName = "Saturday"
    break
  case 6: // condition
    dayName = "Sunday"
    break
  default: // else option using switch
    dayName = "Wrong day number"
}
console.log(dayName)