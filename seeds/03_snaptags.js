exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('snaptag').del()
    .then(function () {
      // Inserts seed entries
      return knex('snaptag').insert([
        { snap_id: 1, tag_id: 1 },
        { snap_id: 1, tag_id: 2 },
        { snap_id: 3, tag_id: 1 }
      ])
    })
}
