var router = require('express').Router()
var passport = require('passport')
var ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn
module.exports = router

router.get('/', ensureLoggedIn(), function (req, res) {
  console.log('req', req);
  res.render('index')
});
router.get('/login', function (req, res, next) {
  res.render('login', {flash: req.flash('error')})
})
router.post('/login',
  passport.authenticate('local', {
      successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true })
);
router.get('/logout', function (req, res, next) {
  req.logout()
  res.redirect('/login')
})
