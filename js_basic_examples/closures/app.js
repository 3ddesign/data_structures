function createGreeter() {
  const myName = 'Max';

  return function() {
    console.log(myName);
  }
}

const greet = createGreeter();
greet();

// function createGreeter(myName) {
//   return function() {
//    console.log(myName);
//  }
// }

// const greetMax = createGreeter('Max');
// const greetManu = createGreeter('Manu');
// greetMax();