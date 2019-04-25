exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('snap').del()
    .then(function () {
      // Inserts seed entries
      return knex('snap').insert([
        { id: 1, name: 'Blossom', image: 'http://placekitten.com/300/200', story: 'I ran into this fluffy friend on my way to the supermarket...', friendliness: 3, lat: -36.864174, lng: 174.7737853 },
        { id: 2, name: 'Milo', image: 'http://placekitten.com/200/200', story: 'This cat loves pats', friendliness: 8, lat: -36.87112, lng: 174.763126 },
        { id: 3, name: 'Karla', image: 'http://placekitten.com/200/300', story: 'Very cool cat, likes to keep her distance.', friendliness: 3, lat: -36.8652076, lng: 174.7751886 }
      ])
    })
}
