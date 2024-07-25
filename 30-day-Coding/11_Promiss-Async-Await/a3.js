// Async-Await

const fetchData1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('fetching data from server 1')
    }, 3000)
})


const fetchData2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error('Promises rejected'))
    }, 3000)
})

const fetchData = async () => {
    try {
        const msg1 = await fetchData1
        console.log(msg1)
    } catch (error) {
        console.error(error)
    }

}

fetchData()

const handleRejectedPromise = async () => {
    try {
        const result = await fetchData2
        console.log(result)
    } catch (error) {
        console.error(error.message)
    }
}

handleRejectedPromise()