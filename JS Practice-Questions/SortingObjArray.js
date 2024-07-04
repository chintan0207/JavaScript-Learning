const Employees = [
    { name: "chintan", age: 21 },
    { name: "Rahul", age: 23 },
    { name: "Brijesh", age: 18 },
    { name: "Saurav", age: 23 },
    { name: "Damin", age: 25 }
]

const sortByAgeA = (arr) => {
    return arr.sort((a,b) => a.age - b.age)
}

const sortByAgeD = (arr) => {
    return arr.sort((a,b) => a.age - b.age).reverse()
}

console.log(sortByAgeA(Employees))
console.log(sortByAgeD(Employees))



