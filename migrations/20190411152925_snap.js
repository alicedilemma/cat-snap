exports.up = (knex, Promise) => {
  return knex.schema.createTable('snap', table => {
    table.increments('id').primary()
    table.string('name')
    table.string('image')
    table.string('story')
    table.integer('friendliness')
    table.integer('lat')
    table.integer('lng')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('snap')
}
