//try-catch-finally-block

try {
    console.log("In the try block.")
    throw new Error("This is an error")
} catch (error) {
    console.log("In the catch block: ", error.message)
} finally {
    console.log("in the finally block")
}
