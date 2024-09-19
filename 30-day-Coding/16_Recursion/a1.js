function factorial(n) {
    if (n < 0) {
        return "factorial not possible for this number"
    }
    if (n === 0 || n === 1) {
        return 1
    }

    return n * factorial(n - 1)
}

console.log(factorial(3))

function fibonacci(n) {
    if (n <= 0) {
        return 0
    } else if (n === 1) {
        return 1
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2)
    }

}

console.log(fibonacci(3))
console.log(fibonacci(4))
