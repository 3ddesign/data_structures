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
