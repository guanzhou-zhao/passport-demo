var bcrypt = require('../../lib/bcrypt')
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.migrate.rollback().then(function () {
      console.log('seed rollback...');
      return knex.migrate.latest().then(function () {
        console.log('seed latest...');
        return knex('user').del()
        .then(function () {
          console.log('seeding...');
          return Promise.all([
            // Inserts seed entries
            knex('user').insert({username: 'ben', hash: bcrypt.hash('123'), privilege: 1}),
            knex('user').insert({username: 'haha', hash: bcrypt.hash('234'), privilege: 2}),
            knex('user').insert({username: 'fbi', hash: bcrypt.hash('234'), privilege: 3})
          ]);
        })
      })
    })
};
