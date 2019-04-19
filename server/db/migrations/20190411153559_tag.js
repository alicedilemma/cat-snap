exports.up = (knex, Promise) => {
  return knex.schema.createTable('tag', table => {
    table.increments('id').primary()
    table.string('tag')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('tag')
}
