// nested if-else statement

const n1 = 90;
const n2 = 75;
const n3 = 97;

if (n1 > n2) {
  if (n1 > n3) {
    console.log(`${n1} is largest number`);
  } else {
    console.log(`${n3} is largest number`);
  }
} else if (n2 > n3) {
  console.log(`${n2} is largest number`);
} else {
  console.log(`${n3} is largest number`);
}
