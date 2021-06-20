var myAge = 31; // global scope

function greet() {
  var myName = 'Max'; // local scope (function scope)
  function printInfo() {
    console.log('Hello ' + myName);
    console.log('I am ' + myAge + ' years old.');
  }
  printInfo();
}

greet();
console.log(myName);
printAge();
