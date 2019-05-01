exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('user').del()
    .then(function () {
      // Inserts seed entries
      return knex('user').insert([
        { id: 1, username: 'rose', hash: '$argon2id$v=19$m=65536,t=2,p=1$kSopPU+6vm42aU0Nu4lkkQ$K4Qv0bQgo2PpsyqnVfau1OTuggCEMwhOocMRKBMfFF8' },
        { id: 2, username: 'blanche', hash: '$argon2id$v=19$m=65536,t=2,p=1$PgOTaqw12n8jAYs9BB2Wgg$tOeuOBvvFXG3DKLBBXz7Td0YOJBqHJhbMckVj2kYI8g' },
        { id: 3, username: 'dorothy', hash: '$argon2id$v=19$m=65536,t=2,p=1$+3d6Vzi0wCFjDMTJhxXhyA$r5h7nb9zitN1pu+Dgk+7tI7vrTZcWPPW2VdLQLn1cx0' }
      ])
    })
}
