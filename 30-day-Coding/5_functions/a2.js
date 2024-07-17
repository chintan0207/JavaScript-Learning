const maxNum = (n1, n2) => {
  let max = n1 > n2 ? n1 : n2;
  return max;
};

console.log(maxNum(25, 45));

const fullName = (first, last) => {
  return `${first} ${last}`;
};

console.log(fullName("Chintan", "Patel"));
