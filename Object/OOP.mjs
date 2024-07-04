class person{     // person is class.  class is BluePrint of object

    constructor(name,age){
        this.name = name
        this.age = age
    }

    mySelf(){
        return `hello my name is ${this.name}`
    }

    static greet() {
        console.log("Hello Good  Morning")
    }

}

let person1 = new person ("Ram",22)  // person1 is object
// console.log(person1.name)
// person.greet()

class employee extends person{
    constructor(name,age,role,salary){
        
        super(name,age,role,salary)

        this.role = role
        this.salary = salary
    }

}

let emp1 = new employee("Saurav",22,"Full stack developer",30000)
console.log(emp1.name)
console.log(emp1.mySelf())
