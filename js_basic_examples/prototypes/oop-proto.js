const companyPerson = {
  name: 'PROTO',
  greet() {
    console.log('Hi, I am ' + this.name);
  }
};

function Employee(name, internalId) {
  this.name = name;
  this.id = internalId;
}

Employee.prototype = companyPerson;
// console.log(Employee.__proto__);
// console.log(Employee.prototype);
// console.log(Employee.prototype === Employee.__proto__);

const emp1 = new Employee('Max', 'e1');
emp1.greet();

Employee.prototype.sayGoodbye = function() {
  console.log('Bye!');
};

Employee.prototype = {};

emp1.sayGoodbye();

class Human {
  wave() {
    console.log('Waving...');
  }
}

const h1 = new Human();
const h2 = new Human();
const h3 = new Human();
console.log(h1);

// class Person extends Human {
//   constructor(n) {
//     super();
//     this.name = n;
//   }
// }

// const p1 = new Person('Max');
// console.log(p1);
// p1.wave();
