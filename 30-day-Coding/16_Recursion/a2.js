//recursion with arrays

const sumOfElements = (arr, index = 0) => {
    //base case
    if (index >= arr.length) {
        return 0;
    }
    //recursive case
    return arr[index] + sumOfElements(arr, index + 1);
}

console.log(sumOfElements([2, 5, 4, 1]))


const maximumElement = (arr, index = 0) => {

    if (index === arr.length - 1) {
        return arr[index];
    }

    const maxOfRest = maximumElement(arr, index + 1);

    return Math.max(arr[index], maxOfRest)

}

console.log(maximumElement([45, 78, 54, 89, 76]))