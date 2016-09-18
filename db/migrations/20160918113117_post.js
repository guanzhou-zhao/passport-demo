
exports.up = function(knex, Promise) {
  return knex.schema.createTable('post', function (table) {
    table.increments('id').primary()
    table.string('body')
    table.timestamps(true, true)
    table.integer('user_id')
    table.foreign('user_id').references('user.id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('post')
};
