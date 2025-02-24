const express = require('express');
const app = express();
app.get('/', (req, res) => {
  someAsyncOperation()
    .then(() => {
      res.send('Hello World!');
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('Internal Server Error');
    });
});
app.listen(3000, () => console.log('Server listening on port 3000'));

function someAsyncOperation() {
  return new Promise((resolve, reject) => {
    const randomNum = Math.random();
    if (randomNum < 0.5) {
      reject(new Error('Something went wrong!'));
    } else {
      resolve();
    }
  });
}