const product = (n1, n2 = 10) => {
  return n1 * n2;
};

console.log(product(25));
console.log(product(25, 3));

const greeting = (name, age = 18) => {
  return `Good morning, my name is ${name} and I am ${age} year old`;
};

console.log(greeting("chintan"));
console.log(greeting("chintan", 22));
