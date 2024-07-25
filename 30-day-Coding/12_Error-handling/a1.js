// Basic error handling with try-catch

const divide = (numerator, denominator) => {
    if (denominator === 0) {
        throw new Error("denominator is Zero this is not possible")
    }
    return numerator / denominator

}
try {
    console.log(divide(10, 2))
    console.log(divide(2, 0))
} catch (error) {
    console.log(error.message)
}



function throwError() {
    throw new Error("This is an Error")
}

try {
    throwError()
} catch (error) {
    console.log("caught an error: ", error.message)
}
