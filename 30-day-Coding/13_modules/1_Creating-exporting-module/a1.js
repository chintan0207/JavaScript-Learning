// creating and exporting modules
// 1. 
const addToNumber = require("./funcs");
const Person = require("./Person");
const person = require("./person2");

console.log(addToNumber(15, 20))

// 2.
const p1 = new Person("Raj", 18)
console.log(p1)
const p2 = new Person("Chintan", 22)
console.log(p2)

p1.setAge(19)
console.log(p1.getAge())

p2.setName("Keval")
console.log(p2.getName())

console.log(p1)
console.log(p2)

// 3.
console.log(`Name: ${person.name}`)
console.log(`Age: ${person.age}`)
person.greet()
