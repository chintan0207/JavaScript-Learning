//functions
//1.even or odd

const oddEven = (num) => {
  const result = num % 2 === 0 ? "Even" : "Odd";
  console.log(`${num} is ${result}`);
};

oddEven(7);
oddEven(8);

function squre(num) {
  return num * num;
}

console.log(squre(25));
