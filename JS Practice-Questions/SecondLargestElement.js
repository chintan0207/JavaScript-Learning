const maxValue = (arr) => {
    return arr.reduce((pre,cur) =>{
     return pre > cur ? pre : cur
    })
 }

const secondLargest = (arr) => {
   let value = maxValue(arr)
//    console.log(value)
   let index = arr.indexOf(value)
//    console.log(index)
   const sl = arr.splice(index,1)
   
   return maxValue(arr)
   
}

const a = [2,7,87,55]
console.log(secondLargest(a))