async function sendRequest() {
  try {
    const response = await fetch(
      'https://jsonplaceholder.typicode/todos/1',
      {}
    );
    console.log('Got response!');
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log('Got an error.');
  }

  // .then(function(response) {
  //   console.log('First then');
  //   return response.json();
  // })
  // .catch(function(err) {
  //   console.log('Failed!');
  // })
  // .then(function(data) {
  //   console.log(data);
  // });
}

sendRequest();
