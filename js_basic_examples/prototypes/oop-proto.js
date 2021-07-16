const companyPerson = {
  greet() {
    console.log('Hi, I am ' + this.name);
  }
};

function Employee(name, internalId) {
  this.name = name;
  this.id = internalId;
}

Employee.prototype = companyPerson;

const emp1 = new Employee('Max', 'e1');
emp1.greet();