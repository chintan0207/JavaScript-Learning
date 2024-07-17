// pattern
let row = 5;

for (let i = 1; i <= row; i++) {
  let line = "";
  for (let p = 1; p <= i; p++) {
    line += "* ";
  }
  console.log(line);
}
