// 1. Create an array that stores five animals

let myArray = ["cat", "dog", "mouse", "snake", "lizzard"]
console.log(myArray)

// 2. Add two more. One at the beginning and one at the end

myArray.unshift("hamster")
myArray.push("parrot")

console.log(myArray)

// 3. Remove the one located in the third position

console.log(myArray.splice(2,1))
console.log(myArray)

// 4. Create a set that stores five books

let myBooks = new Set(["Scythe","Heartstopper","Harry Potter","Hunger Games","Narnia"])
console.log(myBooks)

// 5. Add two more. One of them repeated

myBooks.add("Slated")
myBooks.add("Scythe")
console.log(myBooks)


// 6. Remove one specific book of your choice

myBooks.delete("Harry Potter")
console.log(myBooks)


// 7. Create a map that associates the month number with its name

let myMap = new Map ([
  [1, "January"],
  [2, "February"],
  [3, "March"],
  [4, "April"],
  [5,"May"],
  [6,"June"],
  [7,"July"],
  [8,"August"],
  [9,"September"],
  [10,"October"],
  [11,"November"],
  [12,"December"],
])
console.log(myMap)

// 8. Check if month number 5 exists in the map and print its value

console.log(myMap.get(5))

// 9. Add to the map a key with an array that stores the summer months

myMap.set("Summer",["June", "July", "August"])
console.log(myMap)


// 10. Create an Array, transform it into a Set, and store it in a Map

let myArrayTransform = ["Apple", "Orange", "Lemon", "Banana"]
console.log(myArrayTransform)
let mySetTransform = new Set(myArrayTransform)
console.log(mySetTransform)
let myMapTransform = new Map()
myMapTransform.set("Fruits", mySetTransform)
console.log(myMapTransform)