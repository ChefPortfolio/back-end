
exports.up = function(knex, Promise) {
 
    return knex.schema.createTable('chefs',tbl => {
        tbl.increments();
        tbl.string('first_name').notNullable();
        tbl.string('last_name').notNullable();
        tbl.string('location').notNullable();
        tbl.string('contact').notNullable();
        tbl.string('username').unique().notNullable();
        tbl.string('password').notNullable();
        tbl.string('email_address').notNullable();
        tbl.string('avatar_url');
    })
  
    .createTable('recipes', tbl => {
        tbl.increments();
        tbl.string('title').notNullable();
        tbl.string('description');
        tbl.string('instructions').notNullable();;
        tbl.string('meal_type');
        tbl.integer('chef_id').notNullable().references('id').inTable('chefs').onDelete('CASCADE').onUpdate('CASCADE');
        tbl.string('pic_url');
    })
   
   
    .createTable("ingredients", tbl => {
        tbl.increments();
        tbl.string("ingredient_name").notNullable();
  
    })
  
  
    .createTable('measurement_recipe_ingredient', tbl => {
        tbl.increments();
        tbl.integer('recipe_id').notNullable().references('id').inTable('recipes').onDelete('CASCADE').onUpdate('CASCADE');
        tbl.integer('ingredient_id').notNullable().references('id').inTable('ingredients').onDelete('CASCADE').onUpdate('CASCADE');
        tbl.string('measurement').notNullable();
    })
  }
  
  exports.down = function(knex, Promise) {
    return knex.schema
      .dropTableIfExists('chefs')
      .dropTableIfExists('recipes')
      .dropTableIfExists('ingredients')
      .dropTableIfExists('measurement_recipe_ingredient')
      };
