console.log([] + 1); // '' + 1 => '' + '1' => '1'
console.log([1, 2] + 'hi'); // '1,2' + 'hi' => '1,2hi'
// 1. Step: toPrimitive() (internal method)
// 2. Step: toString()

console.log([1, 2] == 0); // NaN == 0 => false
// console.log(Number([1, 2].toString()));
console.log([] == 0); // '' == 0 => 0 == 0 => true
console.log([] === 0);

// console.log({}.toString());
console.log({} + 1); // '[object Object]' + 1 => '[object Object]1'
console.log({} + 'hi');
console.log({} + []); // '[object Object]' + '' => '[object Object]'
console.log({} == []); // '[object Object]' == ''