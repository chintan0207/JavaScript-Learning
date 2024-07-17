//check leap year

const year = 2024;
if (year % 4 === 0) {
  if (year % 100 === 0) {
    if (year % 400 === 0) {
      console.log(`${year} is leap year`);
    } else {
      console.log(`${year} is not leap year`);
    }
  } else {
    console.log(`${year} is leap year`);
  }
} else {
  console.log(`${year} is not leap year`);
}
