
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {name: 'water', recipe_id: 1},
        {name: 'carrots', recipe_id: 1},
        {name: 'ground beef', recipe_id: 1},
        {name: 'tomatoes', recipe_id: 1},
        {name: 'potatoes', recipe_id: 1}
      ]);
    });
};
