const fibonaciSeries = (n) => {
  let a = 0;
  let b = 1;
  let f = [0];
  for (let i = 0; i <= n - 2; i++) {
    let temp = a + b;
    a = b;
    b = temp;
    f.push(temp);
  }
  return f.toString();
};

// fibonaciSeries(6);
console.log(fibonaciSeries(6));
