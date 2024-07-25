//default parameter

const product = (n1, n2 = 1) => {
    return n1 * n2;
}

console.log(product(10, 20))
console.log(product(10))