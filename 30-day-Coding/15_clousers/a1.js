function outerFunction() {
    let outerVariable = "I am from outerfunction scope"

    function innnerFunction() {
        console.log(outerVariable)
    }

    return innnerFunction;
}

const myFunction = outerFunction()
myFunction()

//2.

function createCouter() {
    let counter = 0;
    return {
        increment: function () {
            counter++;
        },
        getValue: function () {
            return counter
        }
    }
}

const counter = createCouter()
counter.increment()
console.log(counter.getValue())