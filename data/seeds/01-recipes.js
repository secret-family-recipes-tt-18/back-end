
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {name: "Chicken noodle soup", description: 'Some hot yummy soup', category: "soup", user_id: 1},
      ]);
    });
};
