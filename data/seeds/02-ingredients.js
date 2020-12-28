
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {name: 'water', recipe_id: 1},
        {name: 'carrots', recipe_id: 1},
        {name: 'chicken', recipe_id: 1},
        {name: 'noodles', recipe_id: 1},
        {name: 'seasoning', recipe_id: 1}
      ]);
    });
};
