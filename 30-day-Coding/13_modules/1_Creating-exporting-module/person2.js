// person.js
const person = {
    name: 'Damin Lad',
    age: 23,
    greet: function () {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};

module.exports = person;
