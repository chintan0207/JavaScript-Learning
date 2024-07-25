// concurrent promises

//promise.all, promise.race

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('fetching data from server 1')
        // console.log("p1 completed")

    }, 3000)
}).then(msg => console.log(msg))


const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('fetching data from server 2')
        // console.log("p2 completed")
    }, 2000)
}).then(msg => console.log(msg))

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('fetching data from server 3')
        // console.log("p3 completed")
    }, 4000)
}).then(msg => console.log(msg))


// Promise.all([p1, p2, p3])
Promise.race([p1, p2, p3])
