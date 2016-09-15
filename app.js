var express = require('express');
var fs = require('fs')
var app = express();

app.get('/', function (req, res) {
  // fs.writeFile('request.json', req.IncomingMessage, (err) => {
  //   if (err) throw err;
  //   console.log('It\'s saved!');
console.log(req);
    res.send('Hello World!');
  // });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
