let a = [2,4,2,5,7,8,8,5];
let b = [1,2,3,4,5,6]

let newArray = b.filter((i) =>{
    return i <5;
})

let reduceArray = b.reduce((acuaccumulator,currentValue,index) =>{
    if(index % 2 === 1){
        return acuaccumulator+currentValue;
    }
    return acuaccumulator;
},0)

console.log(newArray);
console.log(reduceArray);



let ans = a.filter((val,index,arr) => arr.indexOf(val) !== index)

console.log(ans);


let oddRemove = b.filter((ele,index,arr) =>  arr.indexOf(ele) % 2 !== 0)

console.log(oddRemove)

const reverseArray = (a) =>{
    
    let rArray =[];
    for(let i=a.length - 1;i>=0;i--){
        rArray.push(a[i]);
    }

    return rArray;
}

console.log(reverseArray(a));

const reverseString= (str) =>{
    let rstr = "";

    for(let i=str.length - 1;i>=0;i--){
        rstr += str[i];
    }

    return rstr;
}

console.log(reverseString("Hello"));