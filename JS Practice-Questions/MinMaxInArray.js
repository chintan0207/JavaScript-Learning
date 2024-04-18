//find minimum, maximum element in array with reduce

const numberArray = [21,54,87,75,69]

const maxValue = (arr) => {
   return arr.reduce((pre,cur) =>{
    return pre > cur ? pre : cur
   })
}

const minValue = (arr) => {
    return arr.reduce((pre,cur) =>{
     return pre < cur ? pre : cur
    })
 }

console.log(maxValue(numberArray))
console.log(minValue(numberArray))

//find minimum, maximum element in array by sorting Array

const sortArray = numberArray.sort()
console.log("Minimum Element",sortArray[0])
console.log("Miximum Element",sortArray[sortArray.length-1])

//find minimum, maximum element in array by for loop

const maximumValue = (arr) => {
    let max = arr[0]

    for(let i=1;i<arr.length;i++){
        if(arr[i]>max){
           max = arr[i]
        }
    }
    return max
}

const minimumValue = (arr) => {
    let min = arr[0]

    for(let i=1;i<arr.length;i++){
        if(arr[i]<min){
           min = arr[i]
        }
    }
    return min
}

console.log(maximumValue(numberArray))
console.log(minimumValue(numberArray))




