
const reverseString = (str) => {
 let s = ""
 for(let i = str.length - 1;i>=0;i--){
     s+= str[i]
 }
 return s
}

const reverseArray = (arr) => {
    let a = []
    for(let i = arr.length - 1;i>=0;i--){
        a.push(arr[i])
    }
    return a
   }

console.log(reverseString("chintan"))
console.log(reverseArray([2,5,8,7,9]))

