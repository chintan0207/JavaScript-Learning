const person1 = {
  name: "chintan",
  num: 15,
  address: { village: "Ghej", Taluka: "Chikhli", pincode: 396521 },
};
//.............shallow copy ......................
let person2 = { ...person1 };
person2.address.Taluka = "valsad";
let person3 = Object.assign({}, person1);
console.log(person1, person2, person3);

// .............deep copy..........................

const person4 = JSON.parse(JSON.stringify(person1)); // using JSON method
person4.address.Taluka = "chikhli";
console.log("person4", person4);

// need to install library
// const _ = require("lodash");
// const person5 = _.cloneDeep(person1);
// person4.address.Taluka = "Anand";
// console.log("person5", person5);
