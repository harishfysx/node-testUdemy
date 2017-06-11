const express = require('express');

const app = express();

const port = process.env.PORT || 3000;


// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {

  res
    .status(200)
    .send('Hello world!')
});

app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`)
});

module.exports.app = app;
//test
