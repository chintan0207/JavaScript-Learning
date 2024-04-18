const empArray = [
    { name: "Rahul", age: 22 },
    { name: "Tejas", age: 35 },
    { name: "Akshay", age: 42 },
    { name: "Mayur", age: 28 },
    { name: "Tanay", age: 32 },
    { name: "Mehul", age: 34 }
]

const FilterArray = empArray.filter((item) => item.age<35)
const findEmp = empArray.find((item) => item.age <35)

console.log(FilterArray)
console.log(findEmp)