// map,reduce,filter

const arr = [1, 2, 3, 4, 5];

console.log("Original Array", arr);

const doubled = arr.map((element) => {
  return element * 2;
});
console.log(doubled);

const evenNumArray = arr.filter((num) => {
  return num % 2 === 0;
});

console.log(evenNumArray);

const sumOfElements = arr.reduce((accumaltor, element) => {
  return accumaltor + element;
}, 0);

console.log(sumOfElements);
