exports.up = (knex, Promise) => {
  return knex.schema.createTable('snaptag', table => {
    table.integer('snap_id').references('id').inTable('snap').onDelete('CASCADE')
    table.integer('tag_id').references('id').inTable('tag').onDelete('CASCADE')
    table.unique(['snap_id', 'tag_id'])
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('snaptag')
}
