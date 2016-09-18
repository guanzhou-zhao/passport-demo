var express = require('express');
var exphbs = require('express-handlebars')
var expressSession = require('express-session')
var bodyParser = require('body-parser')
var ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn
var config = require('./knexfile')[process.env.NODE_ENV || 'development']
var knex = require('knex')(config)
var KnexSessionStore = require('connect-session-knex')(expressSession)
var flash = require('connect-flash')
var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy;
var fs = require('fs')
var _ = require('lodash')
var bcrypt = require('./lib/bcrypt')
var User = require('./models/user')
var app = express();
app.use( bodyParser.urlencoded({ extended: true }) );
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
var sess = {
  resave: false,
  saveUninitialized: false,
  secret: 'keyboard cat',
  cookie: {},
  store: new KnexSessionStore({ knex: knex })
}
app.use(expressSession(sess))
app.use(flash())

var users = [
  {id: 1, username: 'ben', hash: bcrypt.hash('123')},
  {id: 2, username: 'haha', hash: bcrypt.hash('234')}
]
passport.use(new LocalStrategy(User.verifyUser));
passport.serializeUser(User.serializeUser);
passport.deserializeUser(User.deserializeUser);
app.use(passport.initialize());
app.use(passport.session());

app.get('/', ensureLoggedIn(), function (req, res) {
  console.log('req', req);
  res.render('index')
});
app.get('/login', function (req, res, next) {
  res.render('login', {flash: req.flash('error')})
})
app.post('/login',
  passport.authenticate('local', {
      successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true })
);
app.get('/logout', function (req, res, next) {
  req.logout()
  res.redirect('/login')
})

module.exports = app
