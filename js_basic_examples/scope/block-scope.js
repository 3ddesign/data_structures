const myName = 'Max'; // block scope, similar to global scope

if (true) {
  // var myAge = 31; // global scope
  let myAge = 31; // block scope

  console.log(myAge);
  console.log(myName);
}

{ // this is a block
  const myName = 'Max'; // block scope
}

// console.log(myAge);
// console.log(myName);
