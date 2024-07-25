//destructuring

const person = {
    name: "Raj",
    age: 18,
    collage: "Goverment Polytechnic,Kheda"

}

const book = {
    title: "Mahabharat",
    author: "Shri Ved Vyas"
}

const { title, author } = book
console.log(`${title} is written by ${author}`)

const { name, age, collage } = person
console.log(`My self ${name} and I am ${age} year old. My collage name is ${collage}`)

const heros = ["shaktiman", "IronMan", "Thor", "Hulk"]
const [h1, h2] = heros

console.log(h1)
console.log(h2)