var express = require('express');
var expressSession = require('express-session')
var config = require('./knexfile')[process.env.NODE_ENV || 'development']
var knex = require('knex')(config)
var KnexSessionStore = require('connect-session-knex')(expressSession)
var flash = require('connect-flash')
var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy;
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
app.use(flash())

passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));
app.use(passport.initialize());
app.use(passport.session());

app.get('/', function (req, res) {
  // fs.writeFile('request.json', req.IncomingMessage, (err) => {
  //   if (err) throw err;
  //   console.log('It\'s saved!');
  console.log(req)
  res.send('Hello World!');
  // });
});
app.get('/login', function (req, res, next) {
  res.render('login')
})
app.post('/login',
  passport.authenticate('local', {
      successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true })
);
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
