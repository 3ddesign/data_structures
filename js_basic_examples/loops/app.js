for (let i = 0; i < 5; i++) {
  console.log(i);
}

// console.log(i);

const user = {
  name: 'Max',
  age: 31,
  greet() {
    console.log('Hello');
  }
};

user.__proto__.test = 5;

for (const key in user) {
  if (user.hasOwnProperty(key)) {
    console.log(key);
    console.log(user[key]);
  }
}

// for (const val of Object.values(user)) {
//   console.log(val);
// }

const numbers = [1, 2, 3, 4, 5];

for (const num of numbers) {
  console.log(num);
}

for (let i = 0; i < numbers.length; i++) {
  console.log(i);
  console.log(numbers[i]);
}

console.log('----');

numbers.forEach(function(num, index, arr) {
  console.log(num);
  console.log('Index: ' + index);
});