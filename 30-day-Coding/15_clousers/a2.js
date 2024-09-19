
function createUniqueIdGenrater() {
    let lastId = 0

    return function () {
        lastId++;
        return lastId;
    }

}

const generateId = createUniqueIdGenrater()
console.log(generateId())
console.log(generateId())

function createGreeting(name) {
    return function () {
        console.log(`Hello, ${name}!`);
    };
}

const greetJohn = createGreeting('chintan');
greetJohn(); 
