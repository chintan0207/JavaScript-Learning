// understanding promises

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('resolve after 2 second')
    }, 2000)
})

p1.then((msg) => {
    console.log(msg)
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('reject after 2 second')
    }, 2000)
})

p2.catch((error) => {
    console.error(error)
})

