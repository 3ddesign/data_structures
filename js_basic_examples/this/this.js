this.age = 31;

function greet() {
  console.log('I am ' + this.age + ' years old.');
}

const person = {
  age: 50,
  greetMe: greet
};

person.greetMe();

// greet();

// 'use strict';

// console.log(this);

// greet();

// function greet() {
//   console.log(this);
// }
