function binarySearch(arr, target, left = 0, right = arr.length - 1) {
    // Base case: if the left index exceeds the right index, the target is not in the array
    if (left > right) {
        return -1;
    }

    // Calculate the middle index
    const mid = Math.floor((left + right) / 2);

    // Base case: if the target is found at the mid index, return the index
    if (arr[mid] === target) {
        return mid;
    }

    // If the target is less than the mid element, search the left half
    if (target < arr[mid]) {
        return binarySearch(arr, target, left, mid - 1);
    }

    // If the target is greater than the mid element, search the right half
    return binarySearch(arr, target, mid + 1, right);
}

const sortedArray = [1, 3, 5, 7, 9, 11, 13];
const targetValue = 7;

console.log(binarySearch(sortedArray, targetValue)); // Output: 3


function countOccurrences(arr, target, index = 0) {
    // Base case: if the index reaches the length of the array, return 0
    if (index === arr.length) {
        return 0;
    }

    // Recursive case: if the current element matches the target, add 1 and continue to the next element
    if (arr[index] === target) {
        return 1 + countOccurrences(arr, target, index + 1);
    }

    // Otherwise, just continue to the next element without adding to the count
    return countOccurrences(arr, target, index + 1);
}

const array = [1, 2, 3, 5, 2, 4, 2, 5];
const targetValue2 = 5;

console.log(countOccurrences(array, targetValue2)); // Output: 3
