const Person = require("./1_classDefination");

class Student extends Person {
    constructor(name, age, studentId) {
        super(name, age)
        this.studentId = studentId
    }

    getStudentId() {
        return this.studentId
    }

    greet() {
        console.log(`${this.studentId}`)
    }
}

const s1 = new Student("Sahil", 23, 101)
console.log(s1)

console.log(s1.getStudentId())
s1.greet()
