const HOF = (funName, n) => {
  for (let i = 1; i <= n; i++) {
    funName();
  }
};

const sayHello = () => {
  console.log("Hello");
};

HOF(sayHello, 3);

//.......................................................
const HOF2 = (fun1, fun2, n1, n2) => {
  return fun2(fun1(n1, n2));
};

const sum = (n1, n2) => {
  return n1 + n2;
};

const squre = (num) => num * num;

console.log(HOF2(sum, squre, 10, 20));
