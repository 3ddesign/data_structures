log(5 > 3);
log(5 > '3'); // '5' > '3' ==> true
log(5 > 'hi'); // '5' > 'hi' ==> false ...
log('hi' > 'hrue'); // 
// String: 0123456789abcdefgh...
log(5 == '3');
log('hi' == 'a');
// Special Case
log('1' == true); // 1 == 1
log('0' == false); // 0 == 0
log('' == false); // 0 == 0
// !!!
log(5 > true); // 5 > 1
log('5' > true); // 5 > 1
log('hi' > true); // NaN > 1
log(0 == false); // 0 == 0 ==> true
log(1 == true); // 1 == 1 ==> true

function log(result) {
  console.log(result);
}