var Model = require('objection').Model
var knex = require('../db')
function User () {
  Model.apply(this, arguments)
}

Model.extend(User)
Model.knex(knex)
User.tableName = 'user'
User.verifyUser = function(username, password, done) {
  console.log('verifyUser in LocalStrategy......');
  var user = _.find(users, function (u) {
    return (u.username === username)
  })
  if (!user) {
    return done(null, false, { message: 'Incorrect username.' });
  } else if (!bcrypt.compareHash(password, user.hash)) {
    return done(null, false, { message: 'Incorrect password.' });
  }
  return done(null, user);
}
User.serializeUser = function(user, done) {
  console.log('serialize user......');
  done(null, user);
}
User.deserializeUser = function(user, done) {
  console.log('deserialize user......');
  var duser = _.find(users, function (u) {
    return u.id === user.id
  })
    done(null, duser);
}
module.exports = User
