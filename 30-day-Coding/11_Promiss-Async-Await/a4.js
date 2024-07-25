// fetching data from Api



const fetchData = async () => {
    try {
        const result = await fetch('https://fakestoreapi.com/users/2')
        const users = await result.json
        console.log(users)
    } catch (error) {
        console.error(error)
    }

}

fetchData().then(() => {
    fetch('https://fakestoreapi.com/products/1')
        .then(res => res.json())
        .then(json => console.log(json))
})

// fetch("https://fakestoreapi.com/users/1")
//     .then((result) => {
//         return result.json()
//     })
//     .then((users) => {
//         console.log(users)
//     })
//     .catch((error) => {
//         console.error(error.message)
//     })

