class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }

    getFirstName() {
        return this.firstName
    }

    getLastName() {
        return this.lastName
    }

    setFirstName(firstName) {
        this.firstName = firstName
    }

    setLastName(lastName) {
        this.lastName = lastName
    }

}

const p1 = new Person("Rahul", "Thakur")
console.log(p1.getFullName())
p1.setFirstName("Rahul")
p1.setLastName("Parmar")
console.log(p1.getFullName())
console.log(p1.getFirstName())
console.log(p1.getLastName())
