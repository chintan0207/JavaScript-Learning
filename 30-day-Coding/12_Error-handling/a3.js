// custom Error Objects

class CustomError extends Error {
    constructor(message) {
        super(message)
        this.name = "CustomError"
    }
}

function throwCustomError() {
    throw new CustomError("This is Custom Error")
}

try {
    throwCustomError()
} catch (error) {
    console.error(`${error.name}: ${error.message}`)
}


// 2.validate input custom error

class validateInputError extends Error {
    constructor(message) {
        super(message)
        this.name = "InputValidationError"
    }
}

function validate(input) {
    if (!input) {
        throw new validateInputError("input not be empty")
    }
    return true
}

try {
    validate(''); // Should throw an error
} catch (error) {
    if (error instanceof validateInputError) {
        console.log(`${error.name}: ${error.message}`);
    } else {
        console.log("An unknown error occurred.");
    }
}

