const hobbies = ['Sports', 'Cooking'];
// const todos = hobbies.slice(); .filter(), .map()
const todos = [...hobbies];

hobbies.push('Eating');
console.log(todos);

const user = { age: 31 };
// const student = Object.assign({}, user);
const student = { ...user };

user.age = 32;
console.log(student);

const users = [{ name: 'Max' }, { name: 'Manu' }];
const students = users.map(usr => {
  return { ...usr };
});

users.push({ name: 'Chris' });
users[0].name = 'Julie';
console.log(students);
