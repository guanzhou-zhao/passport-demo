var express = require('express');
var expressSession = require('express-session')
var config = require('./knexfile')[process.env.NODE_ENV || 'development']
var knex = require('knex')(config)
var KnexSessionStore = require('connect-session-knex')(expressSession)

var fs = require('fs')
var app = express();

var sess = {
  resave: false,
  saveUninitialized: false,
  secret: 'keyboard cat',
  cookie: {},
  store: new KnexSessionStore({ knex: knex })
}
app.use(expressSession(sess))
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
