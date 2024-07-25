// array Iteration

const arr = ["chintan", 20, true, undefined];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

arr.forEach((element) => {
  console.log(element);
});

for (const iterator of arr) {
  console.log(iterator);
}

for (const ele in arr) {
  console.log(ele, arr[ele]);
}
