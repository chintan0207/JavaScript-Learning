// class Person {
//     static greeting() {
//         console.log("Hello,Good morning")
//     }
// }

// Person.greeting()

class Student {
    static numberOfStudents = 0

    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
        Student.numberOfStudents++;
        console.log(`Total Numbers of students: ${Student.numberOfStudents}`)
    }
}

const s1 = new Student("Chintan", "Patel")
const s2 = new Student("Keval", "Gondaliya")
