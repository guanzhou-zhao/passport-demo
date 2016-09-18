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
var indexRouter = require('./routes')
var classifiedRouter = require('./routes/classified')
var app = express();
app.use( bodyParser.urlencoded({ extended: true }) );
var hbs = exphbs.create({
  defaultLayout: 'main',
  helpers: {
  //   prevLink: function(link) {console.log('in helper', link);return link }
  }
});
app.engine('handlebars', hbs.engine);
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

passport.use(new LocalStrategy(User.verifyUser));
passport.serializeUser(User.serializeUser);
passport.deserializeUser(User.deserializeUser);
app.use(passport.initialize());
app.use(passport.session());

app.use(function(req, res, next){
    res.local= {req: req}
    next()
})
app.use('/', indexRouter)
app.use('/classified', classifiedRouter)
module.exports = app
