const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Asynchronous operation that might throw an error
  someAsyncOperation().then(() => {
    res.send('Hello World!');
  }).catch(err => {
    // Error handling that is missing proper error response
    console.error(err);
  });
});
app.listen(3000, () => console.log('Server listening on port 3000'));

function someAsyncOperation() {
  // Simulate an asynchronous operation that might fail
  return new Promise((resolve, reject) => {
    const randomNum = Math.random();
    if (randomNum < 0.5) {
      reject(new Error('Something went wrong!'));
    } else {
      resolve();
    }
  });
}