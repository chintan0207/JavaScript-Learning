// do while
let n = 1;
do {
  console.log(n);
  n++;
} while (n <= 5);

let f = 0;
let result = 1;
let fn = -2;
if (fn >= 0) {
  do {
    f++;
    result *= f;
  } while (f <= fn);
  console.log(result);
} else {
  console.log("enter valid number for find factorial");
}
