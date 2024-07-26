class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    greet() {
        console.log(`Name: ${this.name} Age: ${this.age}`)
    }

    setAge(age) {
        this.age = age
    }
}

const p1 = new Person("Rahul", 25)
p1.greet()

p1.setAge(22)
console.log(p1.age)

module.exports = Person