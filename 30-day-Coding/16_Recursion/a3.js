// recursion with strings

const reverseString = (str) => {
    if (str === "") {
        return "";
    }
    return reverseString(str.slice(1)) + str[0];
}

const name = "Rahul"
console.log(reverseString(name))

const isPalindrome = (str) => {
    if (str.length <= 1) {
        return true;
    }

    if (str[0] !== str[str.length - 1]) {
        return false;
    }

    return isPalindrome(str.slice(1, str.length - 1));
}

const str1 = "racecar"
const str2 = "chintan"

console.log(isPalindrome(str1))
console.log(isPalindrome(str2))
