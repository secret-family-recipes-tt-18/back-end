
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {step: 'heat up water', step_number: 1, recipe_id: 1},
        {step: 'cut veggies', step_number: 2, recipe_id: 1},
        {step: 'boil everything', step_number: 3, recipe_id: 1}
      ]);
    });
};
