const apple = { 
    color: 'Green',
    price: { bulk: '$3/kg', smallQty: '$4/kg' }
  };

  console.log(apple.color); // => Green
  console.log(apple.price.bulk); // => $3/kg
  
 const person = {
    name:"Ram",
    age:25,
    hobby:["playing cricket","reading books"],
    salary:{frontend:10000,backend:15000},
    address:"Ghej",
    myself(){
       return `My name is ${this.name} and I living in ${this.address}.`
    }
 } 

 console.log(person.address);
 person.address="Ghej dukan faliya"
 console.log(person.address);
 console.log(person.hobby);
 person.hobby[1]="Listening Music";
 console.log(person.hobby);
 console.log(person.name);
 console.log(person.salary.backend)

 console.log(person);

 delete person.hobby
console.log(person.myself())
 console.log(person);

//  Objects as arguments.......................................
const origNum = 8;
const origObj = {color: 'blue'};

const changeItUp = (num, obj) => {
  num = 7;
  obj.color = 'red';
};

changeItUp(origNum, origObj);

// Will output 8 since integers are passed by value.
console.log(origNum);

// Will output 'red' since objects are passed 
// by reference and are therefore mutable.
console.log(origObj.color);


//shorthand object creation
const activity = 'Surfing';
const name = "chintan";
const beach = { activity,name };
console.log(beach); 


// A factory function that accepts 'name', 
// 'age', and 'breed' parameters to return 
// a customized dog object. 
const dogFactory = (name, age, breed) => {
    return {
      name: name,
      age: age,
      breed: breed,
    };
  };
  console.log(dogFactory("Alex",4,"bisket"));
  
  
  const engine = {

    start(adverb) {
      console.log(`The engine starts up ${adverb}...`);
    },  
    // anonymous arrow function expression with no arguments
    sputter: () => {
      console.log('The engine sputters...');
    },
  };
  
  console.log(engine.start('noisily'))
  console.log(engine.sputter())
  
//.................................................

const myCat = {
    name: 'Dottie',
    getname() {
      return this.name;  
    },
    setname(newName) {
      this.name = newName;  
    }
  };
  
  // Reference invokes the getter
  console.log(myCat.name);
  
  // Assignment invokes the setter
  myCat.setname("tom")
  console.log(myCat.getname())  
