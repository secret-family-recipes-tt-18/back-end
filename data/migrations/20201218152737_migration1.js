
exports.up = function(knex) {
  return knex.schema.createTable('users', tbl => {
      tbl.increments()
      tbl.string("username", 255).notNullable().unique()
      tbl.string("password", 255).notNullable()
  })
  .createTable("recipes", tbl => {
    tbl.increments()
    tbl.string("name", 255).notNullable()
    tbl.string("category", 255)
    tbl.string("description", 255)
    tbl.integer('user_id')
        .unsigned()
        .notNullable()
        .references("id").inTable("users")
        .onDelete("RESTRICT").onUpdate("CASCADE")
  })
  .createTable("ingredients", tbl => {
      tbl.increments()
      tbl.string('name', 128).notNullable()
      tbl.integer('recipe_id')
      .unsigned()
      .notNullable()
      .references('id').inTable('recipes')
      .onDelete('RESTRICT').onUpdate('CASCADE')
  })
  .createTable('steps', tbl => {
    tbl.increments()
    tbl.string('step', 128).notNullable()
    tbl.integer('step_number').notNullable()
    tbl.integer('recipe_id')
      .unsigned()
      .notNullable()
      .references('id').inTable('recipes')
      .onDelete('RESTRICT').onUpdate('CASCADE')
})
.createTable('step_ingredients', tbl => {
    tbl.increments()
    tbl.string('quantity', 128)
    tbl.integer('step_id')
      .unsigned()
      .notNullable()
      .references('id').inTable('steps')
      .onDelete('RESTRICT').onUpdate('CASCADE')
    tbl.integer('ingredient_id')
      .unsigned()
      .notNullable()
      .references('id').inTable('ingredients')
      .onDelete('RESTRICT').onUpdate('CASCADE')
})
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("step_ingredients")
    .dropTableIfExists("steps")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes")
    .dropTableIfExists("users")
};
