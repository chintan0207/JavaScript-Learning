// const value = Math.random() * 10 + 1
// console.log(value)
// console.log(Math.round(value))
// console.log(Math.random())

// 1. using .then() .catch()
const promise = new Promise((resolve, reject) => {
    const success = Math.random() > 0.5;
    if (success) {
        resolve("Promise resolved successfully.");
    } else {
        reject("Promise rejected.");
    }
});

promise
    .then(message => console.log(message))
    .catch(error => console.log("Caught an error: ", error));

// 2. using async-await

async function handlePromise() {
    const promise = new Promise((resolve, reject) => {
        const success = Math.random() > 0.5;
        if (success) {
            resolve("Promise resolved successfully.");
        } else {
            reject("Promise rejected.");
        }
    });

    try {
        const result = await promise;
        console.log(result);
    } catch (error) {
        console.log("Caught an error: ", error);
    }
}

handlePromise();
