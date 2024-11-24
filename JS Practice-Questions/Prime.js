// given number is Prime or not

const primrNumber = (number) => {
  if (number === 1) {
    console.log(`${number} is not prime neither composite`);
  } else if (number < 1) {
    console.log(`prime number of ${number} is not possible`);
  } else if (number === 2) {
    console.log(`${number} is prime number`);
  } else {
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        var result = `${number} is not prime number`;
        break;
      } else {
        var result = `${number} is prime number`;
      }
    }
    console.log(result);
  }
};

primrNumber(0);
primrNumber(1);
primrNumber(2);
primrNumber(13);
primrNumber(15);
