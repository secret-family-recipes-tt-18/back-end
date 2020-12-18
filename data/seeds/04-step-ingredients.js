
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('step_ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('step_ingredients').insert([
        {quantity: '2 cups', step_id: 2, ingredient_id: 2},
        {quantity: '1 cup', step_id: 2, ingredient_id: 4},
        {step_id: 1, ingredient_id: 1}
      ]);
    });
};
