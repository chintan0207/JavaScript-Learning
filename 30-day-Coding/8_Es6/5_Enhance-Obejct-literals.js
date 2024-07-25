// enhance Object literals
// provide concise way to define objects with methods , properties, and dynamic property name

const name = "Watch"
const price = 780.50

const product = {
    name,
    price,
    applyDiscount(discount) {
        this.price -= discount
        console.log(`New price after discount ${this.price}`)
    },
    display() {
        console.log(`Product: ${name}, ${price}`)
    }
}

product.display()
product.applyDiscount(50)
console.log(product.name)

const proName1 = "firstName"
const proName2 = "lastName"
const proName3 = "age"

const person = {
    [proName1]: "Chintan",
    [proName2]: "Patel",
    [proName3]: 22
}

console.log(person)