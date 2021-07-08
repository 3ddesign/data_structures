const myPromise = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve('It worked!');
  }, 2000);
  // resolve('It worked - earlier!');
});

myPromise
  .then(function(successString) {
    console.log(successString);
    return 123;
  })
  .then(function(data) {
    console.log('Second then');
    console.log(data);
    return myPromise;
  })
  .then(function(data) {
    console.log('Third block');
    console.log(data);
  });

fetch('https://jsonplaceholder.typicode.com/todos/1', {})
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
  });
