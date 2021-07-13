const person = {
  name: 'Max',
  age: 31,
  greet() {
    console.log('Hi, I am ' + this.name);
  }
};

person.greet();
console.log(person);

function Employee(name, internalId) {
  this.name = name;
  this.id = internalId;
}

const employee1 = new Employee('Max', 'e1');
const employee2 = new Employee('Manu', 'e2');

console.log(employee1);
console.log(employee2);

const a = new Object(); // {}
console.log(a);

const arr = new Array(); // []
console.log(arr);

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log('Hi!');
  }
}

const p1 = new Person('Max', 31);
p1.greet();
console.log(p1);