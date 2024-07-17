var number = 10;
let name = "chintan";
const isValue = true;

// console.log(number);
// console.log(name);
// console.log(isValue);
number = 15;
name = "chintan patel";
// isValue = false; // not possible

// console.log(number);
// console.log(name);

const age = 21;
const game = "cricket";
const value = false;
const var1 = null; // object
const var2 = undefined;
const price = 123456789456n;
const symbol1 = Symbol("foo");
const heros = ["Thor", "Iron-man", "Hulk", "Ant-man", 20, true];
const numArray = new Array(1, 2, 3, 4, 5);

console.log(age, typeof age);
console.log(game, typeof game);
console.log(value, typeof value);
console.log(var1, typeof var1);
console.log(var2, typeof var2);
console.log(price, typeof price);
console.log(symbol1, typeof symbol1);
console.log(heros, typeof heros);
console.log(typeof numArray);

const myfun = function () {
  console.log("function");
};

console.log(typeof myfun);
