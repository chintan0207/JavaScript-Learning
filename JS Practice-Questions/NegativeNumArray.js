// input : [4,-5,7,-8]
// output : [4,7,-5,-8]

const arr = [4,-5,7,-8]

const moveNegativeToEnd = (arr) => {

    let p = arr.filter((item) => item > 0)
    let n = arr.filter((item) => item < 0)

    return p.concat(n)
}

console.log(moveNegativeToEnd(arr))