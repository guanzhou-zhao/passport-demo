
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user', function (table) {
    table.increments('id').primary()
    table.string('username')
    table.binary('hash')
    table.integer('privilege')
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user')
};
