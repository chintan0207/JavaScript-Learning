// Spread and Rest Operators

const arr = [1, 2, 3, 4, 5]
const numArray = [...arr, 6, 7, 8, 9, 10]
console.log(arr)
console.log(numArray)

const sum = (...args) => {
    return args.reduce((accu, curr) => {
        return accu + curr;
    }, 0)
}

console.log(sum(1, 2, 3, 4, 5))