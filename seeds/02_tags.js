exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('tag').del()
    .then(function () {
      // Inserts seed entries
      return knex('tag').insert([
        { id: 1, tag: 'Grey' },
        { id: 2, tag: 'Independent' },
        { id: 3, tag: 'Cuddly' }
      ])
    })
}
