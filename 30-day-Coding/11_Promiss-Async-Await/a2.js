//Chaining promises

const fetchData1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('fetching data from server 1')
    }, 1000)
})


const fetchData2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('fetching data from server 2')
    }, 2000)
})


const fetchData3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('fetching data from server 3')
    }, 3000)
})

fetchData1.then((msg) => {
    console.log(msg)
    return fetchData2
}).then((msg) => {
    console.log(msg)
    return fetchData3
}).then((msg) => {
    console.log(msg)
}).catch((error) => {
    console.error(error)
})