// find duplicate element in given array using filter

const duplicateElement = (arr) => {
   
    const a = arr.filter((ele,index,arr) => arr.indexOf(ele) !== index )

    return a
}
console.log(duplicateElement([2,5,"ram",5,2,8,9,8,"ram"]))


// find duplicate element in given array 

const duplicateElement2 = (arr) =>{

    let a = []
    for(let i =0 ; i<arr.length;i++){
        if(arr.indexOf(arr[i]) !== i){
            a.push(arr[i])
        }
    }

    return a
}

console.log(duplicateElement2([2,5,"ram",5,2,8,9,8,"ram"]))
