for (let i = 0; i < 5; i++) {
  setTimeout(function() {
    console.log(i);
  }, 500);
  // (function() {
  //   var j = i;
  //   setTimeout(function() {
  //     console.log(j);
  //   }, 500);
  // })();
}

function createGreeter(myName) {
  return function() {
    console.log(myName);
    setTimeout(function() {
      console.log(myName);
    }, 1000);

    myName = 'Manu';
  };
}

const greetMax = createGreeter('Max');
const greetManu = createGreeter('Manu');
greetMax();
