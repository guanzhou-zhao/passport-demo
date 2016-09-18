var Model = require('objection').Model
var knex = require('../db')
function Post () {
  Model.apply(this, arguments)
}

Model.extend(Post)
Model.knex(knex)
Post.tableName = 'post'

module.exports = Post
