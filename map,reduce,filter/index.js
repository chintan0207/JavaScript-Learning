
const a = [10,50,30,40,20]
console.log("Original Array before used sort(): ",a)
const modifiedArr = a.sort().map((item,index,arr)=>{
    // console.log(index)
    // console.log(arr)
    if(index%2!==0){
      return item*2
    }
  return item;
})
console.log("Original Array after used sort() : ",a)
console.log("Modify Array(even postion of array * 2): ", modifiedArr)

const filterArr = a.filter((item,index,arr) => item > 25)
console.log("Filter Array(item>25): ",filterArr)

const reduceArr = a.reduce((accumalator,currentElement,index,arr) => {
    if(index%2!==0){
        return accumalator + currentElement;
    }
    return accumalator;
},0)

console.log("Reduce Array(sum of even position): ",reduceArr)


// other example

const num = [1, 2, 4, 5, 6, 8];
const tw = num.map(item => item * 2);
console.log(tw);

const newarray = num.filter(item => item % 2 === 0)
console.log(newarray);

const new2 = num.reduce(function (result, item) {
    return result + item
},0);

console.log(new2);

