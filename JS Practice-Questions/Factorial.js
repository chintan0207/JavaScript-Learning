// how to find factorial of given number

let n = 5

const factorial = (num) =>{
    let f = 1
    for(let i=1;i<=num;i++){
        f*=i
    }
    return f
}

console.log(factorial(0))