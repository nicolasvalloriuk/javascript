// Map - Dictionary Structure 
// structure and store data

let myMap = new Map()
console.log(myMap)

// Initiation

myMap = new Map([
  ["name", "Nick"],
  ["surname", "Vallori"],
  ["age", 33]
])
console.log(myMap)

// Methods and properties

// Set
myMap.set("prefered", "Nick")
myMap.set("name", "Nicolas") // as the name already exist it updates it
console.log(myMap)

// Get

console.log(myMap.get("name"))
console.log(myMap.get("surname"))

// has

console.log(myMap.has("email"))
console.log(myMap.has("age"))

// delete

myMap.delete("age")
console.log(myMap)

// keys, values, Entries

console.log(myMap.keys())
console.log(myMap.values())
console.log(myMap.entries())

// Size

console.log(myMap.size)

// Clear

myMap.clear()
console.log(myMap)

// 
