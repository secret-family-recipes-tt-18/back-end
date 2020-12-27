
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {step: 'heat up water', recipe_id: 1},
        {step: 'cut veggies', recipe_id: 1},
        {step: 'boil everything', recipe_id: 1}
      ]);
    });
};
