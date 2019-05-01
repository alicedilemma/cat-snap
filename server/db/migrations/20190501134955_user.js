exports.up = (knex, Promise) => {
  return knex.schema.createTable('user', table => {
    table.increments('id').primary()
    table.string('username').unique()
    table.binary('hash')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('user')
}
