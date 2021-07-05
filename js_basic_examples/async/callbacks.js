const btn = document.querySelector('button');

function clickHandler() {
  console.log('Clicked');
}

btn.addEventListener('click', clickHandler);

setTimeout(function() {
  console.log('Timer completed!');
}, 2000);

console.log('Executes BEFORE the timer completes!');

addItForMe(5, 8, function(res) {
  console.log(res);
});

function addItForMe(num1, num2, cb) {
  const result = num1 + num2;
  cb(result);
}
